import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: 'Ruler',
      title: 'Индивидуальный Дизайн',
      description: 'Создаем уникальные эскизы, учитывая все ваши пожелания и особенности пространства',
      features: ['3D-визуализация', 'Выбор материалов', 'Цветовые решения', 'Техническая документация'],
      color: 'primary'
    },
    {
      icon: 'Hammer',
      title: 'Производство',
      description: 'Современное оборудование и опытные мастера для воплощения любых идей в жизнь',
      features: ['Высокоточная обработка', 'Ручная сборка', 'Контроль качества', 'Быстрые сроки'],
      color: 'secondary'
    },
    {
      icon: 'Truck',
      title: 'Доставка и Установка',
      description: 'Бережная транспортировка и профессиональный монтаж на вашем объекте',
      features: ['Упаковка изделий', 'Доставка по городу', 'Сборка на месте', 'Гарантийное обслуживание'],
      color: 'primary'
    },
    {
      icon: 'Wrench',
      title: 'Реставрация',
      description: 'Возвращаем вторую жизнь вашей любимой мебели с сохранением характера изделия',
      features: ['Оценка состояния', 'Ремонт конструкции', 'Обновление покрытия', 'Замена фурнитуры'],
      color: 'secondary'
    }
  ];

  const materials = [
    { name: 'Массив дерева', icon: 'Trees' },
    { name: 'МДФ премиум', icon: 'Box' },
    { name: 'Металл', icon: 'Factory' },
    { name: 'Стекло', icon: 'Glasses' },
    { name: 'Камень', icon: 'Mountain' },
    { name: 'Текстиль', icon: 'Shirt' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Наши Услуги
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Полный цикл производства — от идеи до готового изделия в вашем доме
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="border-2 hover:border-primary transition-all duration-300 hover:scale-[1.02] animate-scale-in overflow-hidden group"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:bg-${service.color}/20 transition-colors`}>
                    <Icon name={service.icon} size={32} className={`text-${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                        <Icon name="CheckCircle2" size={20} className={`text-${service.color} flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-12 border border-border mb-20 animate-fade-in">
            <h2 className="text-4xl font-bold text-center mb-4">Материалы</h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              Работаем только с качественными и проверенными материалами от надежных поставщиков
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {materials.map((material, index) => (
                <div 
                  key={material.name}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${0.05 * index}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={material.icon} size={24} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-center">{material.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <p className="text-lg text-muted-foreground">Лет опыта</p>
            </div>
            <div className="text-center p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold text-secondary mb-2">500+</div>
              <p className="text-lg text-muted-foreground">Реализованных проектов</p>
            </div>
            <div className="text-center p-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <p className="text-lg text-muted-foreground">Довольных клиентов</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-12 text-center border-2 border-primary/30 animate-fade-in">
            <Icon name="Phone" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Готовы начать работу?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Оставьте заявку, и мы свяжемся с вами в течение часа для обсуждения деталей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+79991234567" 
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform"
              >
                <Icon name="Phone" size={20} />
                +7 (999) 123-45-67
              </a>
              <a 
                href="mailto:info@mebel.ru" 
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform"
              >
                <Icon name="Mail" size={20} />
                Написать нам
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
