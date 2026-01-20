"use client"

export function FooterSection() {
  return (
    <footer className="px-4 md:px-8 lg:px-16 py-16 border-t border-[#333]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo */}
          <div>
            <div className="text-[#ffd700] text-2xl font-bold mb-2">BETELGEUSE</div>
            <div className="text-[#666] text-sm tracking-widest mb-6">DIGITAL GENESIS LAB</div>
            <p className="text-[#888] text-sm">
              Цифровой акселератор для маркетологов, которые хотят создавать IT-сервисы без программистов.
            </p>
          </div>
          
          {/* TG Blog */}
          <div>
            <h4 className="text-white text-lg mb-4">Блог</h4>
            <a 
              href="https://t.me/business_metric" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#00ff88] text-lg hover:text-white transition-colors"
            >
              @business_metric
            </a>
            <ul className="mt-4 space-y-2 text-[#666] text-sm">
              <li>Реальный процесс разработки</li>
              <li>Примеры ошибок и решений</li>
              <li>Демо видео проектов</li>
              <li>Обновления в реальном времени</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white text-lg mb-4">Контакты</h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@betelgeuse.lab" 
                className="block text-[#888] hover:text-[#00ff88] transition-colors"
              >
                hello@betelgeuse.lab
              </a>
              <a 
                href="https://t.me/business_metric" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#888] hover:text-[#00ff88] transition-colors"
              >
                Telegram: @business_metric
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#444] text-sm">
            © 2026 BETELGEUSE. Все права защищены.
          </p>
          <p className="text-[#333] text-sm">
            <span className="text-[#00ff88]">_</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
