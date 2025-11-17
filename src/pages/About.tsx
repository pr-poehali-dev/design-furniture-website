import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';

const About = () => {
  const values = [
    {
      icon: 'Lightbulb',
      title: 'Инновации',
      description: 'Смелые дизайнерские решения и передовые технологии производства'
    },
    {
      icon: 'Award',
      title: 'Качество',
      description: 'Используем только лучшие материалы и проверенные техники'
    },
    {
      icon: 'Users',
      title: 'Индивидуальность',
      description: 'Каждый проект создается с учетом пожеланий заказчика'
    },
    {
      icon: 'Leaf',
      title: 'Экологичность',
      description: 'Ответственное производство и экологически чистые материалы'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              О Нас
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Мы создаем мебель, которая объединяет функциональность и искусство. 
              Каждое изделие — это результат вдохновения и мастерства.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl font-bold mb-4 text-primary">Наша История</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Мы начали свой путь с желания изменить представление о современной мебели. 
                Сегодня наша команда талантливых дизайнеров и мастеров создает уникальные изделия, 
                которые становятся центром внимания в любом интерьере.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Каждый проект для нас — это возможность воплотить смелую идею и создать 
                что-то действительно особенное.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border hover:border-secondary transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold mb-4 text-secondary">Наш Подход</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Мы верим, что мебель должна быть не просто функциональной, но и вдохновляющей. 
                Наш подход сочетает классическое мастерство с современными технологиями.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                От первого эскиза до финального штриха — мы контролируем каждый этап производства, 
                гарантируя безупречное качество.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center mb-12">Наши Ценности</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-scale-in group"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={value.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 border border-primary/20 animate-fade-in">
            <Icon name="Sparkles" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Создадим что-то особенное вместе</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Готовы обсудить ваш проект? Мы всегда открыты для новых идей и творческих вызовов.
            </p>
            <a 
              href="mailto:info@mebel.ru" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform"
            >
              <Icon name="Mail" size={20} />
              Связаться с нами
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
