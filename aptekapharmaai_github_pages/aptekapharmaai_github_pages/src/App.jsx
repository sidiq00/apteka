import React, { useState, useEffect } from 'react';
import { Search, MessageCircle, AlertCircle, Check } from 'lucide-react';

export default function AptekaPharmaAI() {
  const [activeTab, setActiveTab] = useState('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDrug, setSelectedDrug] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [drugs, setDrugs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dorilar ma'lumotlarini o'qish (drugs.json dan)
  useEffect(() => {
    const fetchDrugs = async () => {
      try {
        // public/ papkadan o'qish
        const response = await fetch('./drugs.json');
        const data = await response.json();
        setDrugs(data.drugs || []);
      } catch (error) {
        console.error('Dorilar yuklanishida xato:', error);
        setDrugs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchDrugs();
  }, []);

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = { type: 'user', text: chatInput };
    const botResponse = generateBotResponse(chatInput);
    const botMessage = { type: 'bot', text: botResponse };

    setChatMessages([...chatMessages, userMessage, botMessage]);
    setChatInput('');
  };

  const generateBotResponse = (input) => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('salom') || lowerInput.includes('assalomu')) {
      return 'Assalomu alaikum! 👋 Aptekachilar uchun AI botiga xush kelibsiz. Men doriler haqida savollaringizga javob beray. Qanday yordam beray?';
    }
    if (lowerInput.includes('og\'riq') || lowerInput.includes('pain')) {
      return 'Og\'riqni tushirish uchun: Paracetamol, Ibuprofen yoki Aspirin tavsiya qilinadi. Lekin avvalambor shifokoringizga maslahat oling! 💊';
    }
    if (lowerInput.includes('isitma') || lowerInput.includes('fever')) {
      return 'Isitmani tushirish uchun Paracetamol (500mg) yoki Ibuprofen (400mg) qabul qiling. Agar 3 kun davomida tushmaydigan bo\'lsa, shifoga murojaat qiling!';
    }
    if (lowerInput.includes('antibiotik')) {
      return 'Antibiotik - bu faqat bakterial infeksiyalar uchun yordam beradi. Viral infeksiyalar uchun mos emas. Shifoning tavsiyasi bilan foydalaning! ⚠️';
    }
    if (lowerInput.includes('dori') || lowerInput.includes('retsept')) {
      return 'Dori haqida savollaringizga javob berishga tayyor! Dorini nomi yoki ta\'siri bo\'yicha qidirishingiz mumkin. Qaysi dori haqida bilmoqchi?';
    }

    return 'Soriyni tushunmadim. Dori nomi, belgilari yoki boshqa dori savollarini kiritib ko\'ring. Misal: "Paracetamol", "og\'riq", "isitma" 🤔';
  };

  const filteredDrugs = drugs.filter(
    (drug) =>
      drug.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      drug.generic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      drug.usage.toLowerCase().includes(searchQuery.toLowerCase()) ||
      drug.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl mb-3">💊</p>
          <p className="text-slate-600">Dorilar yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b border-blue-100 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
              <span className="text-white font-bold">💊</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">AptekaPharmaAI</h1>
          </div>
          <p className="text-slate-600 text-sm mt-1">Aptekachilar uchun intellektual dori tahlili tizimi</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-blue-100 bg-white/50 backdrop-blur-sm sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 flex gap-2">
          <button
            onClick={() => setActiveTab('search')}
            className={`px-4 py-3 font-medium text-sm transition-all border-b-2 ${
              activeTab === 'search'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Search className="inline w-4 h-4 mr-2" />
            Dori Qidiruvi
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-4 py-3 font-medium text-sm transition-all border-b-2 ${
              activeTab === 'chat'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <MessageCircle className="inline w-4 h-4 mr-2" />
            Farmatsevtik Chatbot
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search Tab */}
        {activeTab === 'search' && (
          <div className="space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Dori qidiring... (Paracetamol, og'riq, antibyotik...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-xl border border-blue-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm placeholder-slate-500"
              />
              <Search className="absolute right-4 top-4 w-5 h-5 text-slate-400" />
            </div>

            {selectedDrug ? (
              <div className="bg-white rounded-xl border border-blue-100 shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 text-white">
                  <button
                    onClick={() => setSelectedDrug(null)}
                    className="text-white hover:text-blue-100 text-sm mb-3 font-medium"
                  >
                    ← Orqaga qaytish
                  </button>
                  <h2 className="text-2xl font-bold">{selectedDrug.name}</h2>
                  <p className="text-blue-100 text-sm mt-2">Umumiy nomi: {selectedDrug.generic}</p>
                </div>

                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <h3 className="font-semibold text-slate-900 mb-1">Qo'llaniladigan joyi</h3>
                      <p className="text-slate-700">{selectedDrug.usage}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <h3 className="font-semibold text-slate-900 mb-1">Doза</h3>
                      <p className="text-slate-700">{selectedDrug.dose}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Yan ta'sirlari
                      </h3>
                      <p className="text-amber-800 text-sm">{selectedDrug.sideEffects}</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-900 mb-2">Tovar ma'lumoti</h3>
                      <p className="text-blue-800 text-sm">
                        <strong>Ishlab chiqaruvchi:</strong> {selectedDrug.manufacturer}
                      </p>
                      <p className="text-blue-800 text-sm mt-1">
                        <strong>Taxminiy narx:</strong> {selectedDrug.price} so'm
                      </p>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h3 className="font-semibold text-red-900 mb-3">⚠️ Xavfli O'zaro Ta'sirlari</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedDrug.interactions.map((interaction, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-red-200 text-red-900 rounded-full text-sm font-medium"
                        >
                          {interaction}
                        </span>
                      ))}
                    </div>
                    <p className="text-red-800 text-sm mt-3">
                      Agar boshqa dorini ham qabul qilyaptsiz, yuqoridagi dorilar bilan birgalikda ishlatmang!
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredDrugs.map((drug) => (
                  <button
                    key={drug.id}
                    onClick={() => setSelectedDrug(drug)}
                    className="text-left p-5 bg-white rounded-lg border border-blue-100 hover:border-blue-400 hover:shadow-lg transition-all hover:scale-105"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">{drug.name}</h3>
                        <p className="text-slate-600 text-sm mt-1">{drug.usage.substring(0, 50)}...</p>
                        <span className="inline-block mt-3 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                          {drug.category}
                        </span>
                      </div>
                      <Check className="w-5 h-5 text-teal-500 mt-1" />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {filteredDrugs.length === 0 && !selectedDrug && (
              <div className="text-center py-12">
                <p className="text-slate-600">Qidiruv natijasi topilmadi. Boshqa dori nomini qidiring.</p>
              </div>
            )}
          </div>
        )}

        {/* Chat Tab */}
        {activeTab === 'chat' && (
          <div className="flex flex-col h-[calc(100vh-250px)] bg-white rounded-xl border border-blue-100 shadow-md overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {chatMessages.length === 0 && (
                <div className="flex items-center justify-center h-full text-center">
                  <div>
                    <p className="text-3xl mb-3">💬</p>
                    <p className="text-slate-600">Salom! Aptekachilar uchun AI botiga xush kelibsiz.</p>
                    <p className="text-slate-500 text-sm mt-2">Dori haqida savollarini kiritib ko'ring...</p>
                  </div>
                </div>
              )}
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-lg ${
                      msg.type === 'user'
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-slate-100 text-slate-900 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-blue-100 p-4 bg-slate-50">
              <form onSubmit={handleChatSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Savolingizni yozing..."
                  className="flex-1 px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                >
                  Yuborish
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-blue-100 bg-white/50 backdrop-blur-sm mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-slate-600 text-sm">
          <p>⚠️ Bu tizim faqat ma'lumot uchun. Hamma dorilar shifoning tavsiyasi bilan foydalanilishi kerak.</p>
          <p className="mt-2">AptekaPharmaAI © 2024 | Aptekachilar uchun AI yechim | GitHub Pages</p>
        </div>
      </div>
    </div>
  );
}
