import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const services = [
    {
      icon: "Sparkles",
      title: "Разработка фирменного стиля",
      description: "Создание уникального визуального языка вашего бренда"
    },
    {
      icon: "Palette",
      title: "Логотип и айдентика",
      description: "Проектирование запоминающегося образа компании"
    },
    {
      icon: "BookOpen",
      title: "Брендбук",
      description: "Комплексное руководство по использованию бренда"
    },
    {
      icon: "Package",
      title: "Упаковка и полиграфия",
      description: "Дизайн носителей бренда в физическом мире"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Бриф и исследование",
      description: "Глубокое погружение в специфику бизнеса, анализ конкурентов и целевой аудитории"
    },
    {
      number: "02",
      title: "Стратегия бренда",
      description: "Разработка позиционирования, ценностей и тональности коммуникации"
    },
    {
      number: "03",
      title: "Концепция дизайна",
      description: "Создание визуальных направлений и презентация креативных решений"
    },
    {
      number: "04",
      title: "Разработка",
      description: "Детальная проработка всех элементов фирменного стиля"
    },
    {
      number: "05",
      title: "Финализация",
      description: "Подготовка брендбука и всех файлов для использования"
    }
  ];

  const portfolio = [
    {
      title: "Премиальная недвижимость",
      category: "Полный ребрендинг",
      image: "https://cdn.poehali.dev/projects/097dcbec-c590-43c3-8b87-5104b491f984/files/99fa89ac-d026-4a74-a3fb-0df35583f90d.jpg"
    },
    {
      title: "Ресторанная группа",
      category: "Создание бренда",
      image: "https://cdn.poehali.dev/projects/097dcbec-c590-43c3-8b87-5104b491f984/files/5c8c4863-a381-4f93-9d57-20cbf6796d46.jpg"
    },
    {
      title: "Технологический стартап",
      category: "Визуальная идентичность",
      image: "https://cdn.poehali.dev/projects/097dcbec-c590-43c3-8b87-5104b491f984/files/5435615e-4457-4d6f-b9f4-15af89f36504.jpg"
    }
  ];

  const testimonials = [
    {
      text: "Работа с командой превзошла все ожидания. Новый фирменный стиль полностью изменил восприятие нашего бренда на рынке.",
      author: "Михаил Соколов",
      position: "CEO, Premium Estate"
    },
    {
      text: "Профессионализм на каждом этапе. От стратегии до финальной реализации — всё выполнено безупречно.",
      author: "Елена Волкова",
      position: "Маркетинг-директор, Gastro Group"
    },
    {
      text: "Команда не просто создала логотип — они выстроили целостную систему визуальной коммуникации нашего бренда.",
      author: "Дмитрий Петров",
      position: "Founder, TechFlow"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">BRAND</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#process" className="hover:text-primary transition-colors">Процесс</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
          </div>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Связаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-6xl md:text-8xl font-light mb-6 animate-fade-in leading-tight">
            Создаём бренды,<br />которые вдохновляют
          </h1>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Премиальное брендинговое агентство полного цикла.<br />От стратегии до реализации.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              Обсудить проект
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8">
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-4">Наши услуги</h2>
            <div className="w-20 h-[2px] bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card border-border hover:border-primary transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon name={service.icon} className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-medium mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-4">Процесс работы</h2>
            <div className="w-20 h-[2px] bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              От первой встречи до финального результата — прозрачный и структурированный подход
            </p>
          </div>
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <Card 
                key={index}
                className={`p-8 bg-card border-border cursor-pointer transition-all duration-500 ${
                  activeStep === index ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
                }`}
                onClick={() => setActiveStep(activeStep === index ? null : index)}
              >
                <div className="flex items-start gap-6">
                  <div className="text-6xl font-light text-primary/30 leading-none">{step.number}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium mb-2">{step.title}</h3>
                    <p className={`text-muted-foreground leading-relaxed transition-all duration-500 ${
                      activeStep === index ? 'opacity-100 max-h-20' : 'opacity-70 max-h-0 overflow-hidden md:max-h-20 md:opacity-70'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                  <Icon 
                    name={activeStep === index ? "ChevronUp" : "ChevronDown"} 
                    className="w-6 h-6 text-primary md:hidden" 
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-4">Портфолио</h2>
            <div className="w-20 h-[2px] bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden bg-card border-border group cursor-pointer hover:border-primary transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-muted overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary mb-2">{project.category}</p>
                  <h3 className="text-xl font-medium">{project.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-4">Отзывы клиентов</h2>
            <div className="w-20 h-[2px] bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-card border-border">
                <Icon name="Quote" className="w-10 h-10 text-primary/30 mb-6" />
                <p className="text-lg leading-relaxed mb-6 italic">{testimonial.text}</p>
                <div className="border-t border-border pt-6">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-light mb-4">Начнём сотрудничество</h2>
            <div className="w-20 h-[2px] bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground">
              Расскажите о вашем проекте, и мы свяжемся с вами в течение 24 часов
            </p>
          </div>
          <Card className="p-8 bg-card border-border">
            <form className="space-y-6">
              <div>
                <Input 
                  placeholder="Ваше имя" 
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Input 
                  placeholder="Компания" 
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Расскажите о вашем проекте" 
                  rows={5}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">BRAND</div>
              <p className="text-sm text-muted-foreground">
                Создаём бренды, которые вдохновляют и остаются в памяти
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>info@brand-agency.ru</p>
                <p>+7 (495) 123-45-67</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Facebook" className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Linkedin" className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
            © 2024 Brand Agency. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;