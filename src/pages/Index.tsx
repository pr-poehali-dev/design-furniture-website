import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-20 animate-fade-in">
            <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
              Дизайнерская мебель
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                с характером
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Создаем функциональные и стильные решения для вашего пространства. 
              Каждое изделие — уникальное произведение искусства.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform"
              >
                Наши Услуги
                <Icon name="ArrowRight" size={20} />
              </Link>
              <Link 
                to="/about"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform"
              >
                О Компании
                <Icon name="Info" size={20} />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Palette" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Смелый Дизайн</h3>
              <p className="text-muted-foreground leading-relaxed">
                Уникальные решения, которые выделяют ваше пространство и подчеркивают индивидуальность
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border hover:border-secondary transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Icon name="Zap" size={28} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Функциональность</h3>
              <p className="text-muted-foreground leading-relaxed">
                Продуманная эргономика и практичность в каждой детали для комфорта использования
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Star" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Премиум Качество</h3>
              <p className="text-muted-foreground leading-relaxed">
                Лучшие материалы и безупречное исполнение гарантируют долговечность изделий
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 border border-primary/20 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Воплотим вашу идею в реальность</h2>
            <p className="text-lg text-muted-foreground mb-8">
              От первого эскиза до установки готового изделия — мы сопровождаем каждый этап
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-left">
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Индивидуальный подход</div>
                  <div className="text-sm text-muted-foreground">Учитываем все пожелания</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Быстрое производство</div>
                  <div className="text-sm text-muted-foreground">От 2 недель</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Гарантия качества</div>
                  <div className="text-sm text-muted-foreground">3 года на все изделия</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;