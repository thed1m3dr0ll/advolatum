export default function ContactsSection() {
  return (
    <section className="bg-adv-dark py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <p className="text-adv-gray text-[10px] tracking-widest uppercase mb-4">ADVOLATUM</p>
            <h2 className="text-white text-4xl font-bold tracking-wide mb-8 uppercase">
              КОНТАКТЫ
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-adv-gray text-xs tracking-widest uppercase mb-2">АДРЕС</p>
                <p className="text-white text-sm">г. Москва, ул. Примерная, д. 1</p>
              </div>
              <div>
                <p className="text-adv-gray text-xs tracking-widest uppercase mb-2">ТЕЛЕФОН</p>
                <a href="tel:+74951234567" className="text-white text-sm hover:text-adv-accent transition-colors">
                  +7 (495) 123-45-67
                </a>
              </div>
              <div>
                <p className="text-adv-gray text-xs tracking-widest uppercase mb-2">EMAIL</p>
                <a href="mailto:info@advolatum.ru" className="text-white text-sm hover:text-adv-accent transition-colors">
                  info@advolatum.ru
                </a>
              </div>
              <div>
                <p className="text-adv-gray text-xs tracking-widest uppercase mb-2">РЕЖИМ РАБОТЫ</p>
                <p className="text-white text-sm">Пн-Вс: 10:00 - 22:00</p>
              </div>
              <div>
                <p className="text-adv-gray text-xs tracking-widest uppercase mb-4">СОЦИАЛЬНЫЕ СЕТИ</p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-white text-xs tracking-widest hover:text-adv-accent transition-colors border border-adv-border px-4 py-2"
                  >
                    VK
                  </a>
                  <a
                    href="#"
                    className="text-white text-xs tracking-widest hover:text-adv-accent transition-colors border border-adv-border px-4 py-2"
                  >
                    TELEGRAM
                  </a>
                  <a
                    href="#"
                    className="text-white text-xs tracking-widest hover:text-adv-accent transition-colors border border-adv-border px-4 py-2"
                  >
                    INSTAGRAM
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <h3 className="text-white text-xl font-semibold tracking-wider mb-8 uppercase">
              НАПИСАТЬ НАМ
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="ВАШЕ ИМЯ"
                  className="w-full bg-transparent border border-adv-border text-white text-xs tracking-widest placeholder-adv-gray px-4 py-3 focus:outline-none focus:border-adv-accent transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full bg-transparent border border-adv-border text-white text-xs tracking-widest placeholder-adv-gray px-4 py-3 focus:outline-none focus:border-adv-accent transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="ТЕЛЕФОН"
                  className="w-full bg-transparent border border-adv-border text-white text-xs tracking-widest placeholder-adv-gray px-4 py-3 focus:outline-none focus:border-adv-accent transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="СООБЩЕНИЕ"
                  rows={5}
                  className="w-full bg-transparent border border-adv-border text-white text-xs tracking-widest placeholder-adv-gray px-4 py-3 focus:outline-none focus:border-adv-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full border border-adv-accent text-adv-accent text-xs font-bold tracking-widest py-3 hover:bg-adv-accent hover:text-black transition-colors"
              >
                ОТПРАВИТЬ
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
