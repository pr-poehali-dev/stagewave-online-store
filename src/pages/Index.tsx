import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedComponents, setSelectedComponents] = useState({
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
    motherboard: null,
    psu: null
  });

  const components = {
    cpu: [
      { id: 1, name: 'Intel Core i9-14900K', price: 62999, specs: '24 ядра, 5.6 ГГц' },
      { id: 2, name: 'AMD Ryzen 9 7950X', price: 58999, specs: '16 ядер, 5.7 ГГц' },
      { id: 3, name: 'Intel Core i7-14700K', price: 45999, specs: '20 ядер, 5.6 ГГц' }
    ],
    gpu: [
      { id: 1, name: 'RTX 4090', price: 189999, specs: '24GB VRAM, 4K Gaming' },
      { id: 2, name: 'RTX 4080 Super', price: 129999, specs: '16GB VRAM, 4K Gaming' },
      { id: 3, name: 'RTX 4070 Ti Super', price: 89999, specs: '16GB VRAM, 1440p Gaming' }
    ],
    ram: [
      { id: 1, name: 'G.Skill Trident Z5 RGB 32GB', price: 18999, specs: 'DDR5-6000, RGB' },
      { id: 2, name: 'Corsair Dominator 32GB', price: 22999, specs: 'DDR5-5600, Premium' },
      { id: 3, name: 'Kingston Fury Beast 16GB', price: 8999, specs: 'DDR5-5200, Gaming' }
    ],
    storage: [
      { id: 1, name: 'Samsung 990 PRO 2TB', price: 24999, specs: 'NVMe, 7000 MB/s' },
      { id: 2, name: 'WD Black SN850X 1TB', price: 12999, specs: 'NVMe, 7300 MB/s' },
      { id: 3, name: 'Crucial P5 Plus 1TB', price: 9999, specs: 'NVMe, 6600 MB/s' }
    ]
  };

  const preBuiltPCs = [
    {
      id: 1,
      name: 'Gaming Beast Pro',
      price: 299999,
      specs: 'RTX 4090 + i9-14900K',
      category: 'Премиум',
      performance: '4K Ultra',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Cyber Warrior',
      price: 199999,
      specs: 'RTX 4080 + i7-14700K',
      category: 'Производительность',
      performance: '4K High',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Stream Master',
      price: 149999,
      specs: 'RTX 4070 Ti + Ryzen 7',
      category: 'Стриминг',
      performance: '1440p Ultra',
      image: '/placeholder.svg'
    }
  ];

  const calculateTotal = () => {
    return Object.values(selectedComponents).reduce((total, component) => {
      return component ? total + component.price : total;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gaming-black text-white font-roboto">
      {/* Header */}
      <header className="border-b border-gaming-gray bg-gaming-black/90 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-orbitron font-bold bg-gradient-to-r from-gaming-pink to-gaming-cyan bg-clip-text text-transparent animate-rgb-glow">
                StageWave
              </h1>
              <Badge variant="secondary" className="bg-gaming-purple text-white animate-pulse-gaming">
                Gaming Store
              </Badge>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="hover:text-gaming-pink transition-colors">Каталог</a>
              <a href="#builds" className="hover:text-gaming-cyan transition-colors">Готовые сборки</a>
              <a href="#configurator" className="hover:text-gaming-purple transition-colors">Конфигуратор</a>
              <a href="#about" className="hover:text-gaming-pink transition-colors">О нас</a>
              <a href="#contacts" className="hover:text-gaming-cyan transition-colors">Контакты</a>
            </nav>
            <Button className="bg-gradient-to-r from-gaming-pink to-gaming-purple hover:from-gaming-purple hover:to-gaming-cyan transition-all duration-300">
              <Icon name="ShoppingCart" className="mr-2" size={16} />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gaming-black via-gaming-gray to-gaming-black">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF0080' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-orbitron font-black mb-6 bg-gradient-to-r from-gaming-pink via-gaming-cyan to-gaming-purple bg-clip-text text-transparent animate-float">
            ПОЕХАЛИ В БУДУЩЕЕ
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Собери игровой ПК мечты с RGB подсветкой и максимальной производительностью
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gaming-pink hover:bg-gaming-pink/80 text-white font-bold py-4 px-8 animate-pulse-gaming">
              <Icon name="Gamepad2" className="mr-2" size={20} />
              Собрать ПК
            </Button>
            <Button size="lg" variant="outline" className="border-gaming-cyan text-gaming-cyan hover:bg-gaming-cyan hover:text-black">
              <Icon name="Cpu" className="mr-2" size={20} />
              Готовые сборки
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="catalog" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gaming-gray">
            <TabsTrigger value="catalog" className="data-[state=active]:bg-gaming-pink">
              <Icon name="Grid3X3" className="mr-2" size={16} />
              Каталог
            </TabsTrigger>
            <TabsTrigger value="builds" className="data-[state=active]:bg-gaming-cyan data-[state=active]:text-black">
              <Icon name="Pc" className="mr-2" size={16} />
              Готовые сборки
            </TabsTrigger>
            <TabsTrigger value="configurator" className="data-[state=active]:bg-gaming-purple">
              <Icon name="Settings" className="mr-2" size={16} />
              Конфигуратор
            </TabsTrigger>
            <TabsTrigger value="about" className="data-[state=active]:bg-gaming-pink">
              <Icon name="Info" className="mr-2" size={16} />
              О нас
            </TabsTrigger>
          </TabsList>

          {/* Catalog Tab */}
          <TabsContent value="catalog" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(components).map(([category, items]) => (
                <Card key={category} className="bg-gaming-gray border-gaming-purple hover:border-gaming-pink transition-colors">
                  <CardHeader>
                    <CardTitle className="text-gaming-cyan font-orbitron">
                      {category === 'cpu' ? 'Процессоры' : 
                       category === 'gpu' ? 'Видеокарты' : 
                       category === 'ram' ? 'Оперативная память' : 'Накопители'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="p-4 bg-gaming-black rounded-lg border border-gaming-gray hover:border-gaming-cyan transition-colors">
                        <h4 className="font-semibold text-white">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.specs}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-gaming-pink font-bold">{item.price.toLocaleString()} ₽</span>
                          <Button size="sm" className="bg-gaming-purple hover:bg-gaming-pink">
                            <Icon name="Plus" size={14} />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Pre-built PCs Tab */}
          <TabsContent value="builds" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {preBuiltPCs.map((pc) => (
                <Card key={pc.id} className="bg-gradient-to-br from-gaming-gray to-gaming-black border-gaming-purple hover:border-gaming-cyan transition-all duration-300 group hover:animate-rgb-glow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant="secondary" className="bg-gaming-pink text-white">
                        {pc.category}
                      </Badge>
                      <Icon name="Star" className="text-gaming-cyan" size={20} />
                    </div>
                    <CardTitle className="text-white font-orbitron">{pc.name}</CardTitle>
                    <CardDescription className="text-gaming-cyan">{pc.specs}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gaming-black rounded-lg mb-4 flex items-center justify-center border border-gaming-purple">
                      <Icon name="Monitor" className="text-gaming-purple" size={48} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Производительность:</span>
                        <Badge variant="outline" className="border-gaming-cyan text-gaming-cyan">
                          {pc.performance}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gaming-pink">{pc.price.toLocaleString()} ₽</span>
                    <Button className="bg-gradient-to-r from-gaming-pink to-gaming-purple hover:from-gaming-purple hover:to-gaming-cyan">
                      Купить
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* PC Configurator Tab */}
          <TabsContent value="configurator" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card className="bg-gaming-gray border-gaming-purple">
                  <CardHeader>
                    <CardTitle className="text-gaming-cyan font-orbitron flex items-center">
                      <Icon name="Settings" className="mr-2" />
                      Конфигуратор ПК
                    </CardTitle>
                    <CardDescription>Выберите компоненты для вашей идеальной сборки</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {Object.entries(components).map(([category, items]) => (
                      <div key={category} className="space-y-3">
                        <label className="text-sm font-medium text-gaming-pink">
                          {category === 'cpu' ? 'Процессор' : 
                           category === 'gpu' ? 'Видеокарта' : 
                           category === 'ram' ? 'Оперативная память' : 'Накопитель'}
                        </label>
                        <Select onValueChange={(value) => {
                          const component = items.find(item => item.id.toString() === value);
                          setSelectedComponents(prev => ({...prev, [category]: component}));
                        }}>
                          <SelectTrigger className="bg-gaming-black border-gaming-gray text-white">
                            <SelectValue placeholder="Выберите компонент" />
                          </SelectTrigger>
                          <SelectContent className="bg-gaming-black border-gaming-gray">
                            {items.map((item) => (
                              <SelectItem key={item.id} value={item.id.toString()} className="text-white hover:bg-gaming-gray">
                                <div className="flex justify-between w-full">
                                  <span>{item.name}</span>
                                  <span className="text-gaming-pink ml-4">{item.price.toLocaleString()} ₽</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-gaming-gray to-gaming-black border-gaming-cyan">
                  <CardHeader>
                    <CardTitle className="text-gaming-cyan font-orbitron">Ваша сборка</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(selectedComponents).map(([category, component]) => (
                      <div key={category}>
                        {component ? (
                          <div className="flex justify-between items-center p-3 bg-gaming-black rounded border border-gaming-purple">
                            <div>
                              <p className="text-sm font-medium text-white">{component.name}</p>
                              <p className="text-xs text-gray-400">{component.specs}</p>
                            </div>
                            <span className="text-gaming-pink font-bold">{component.price.toLocaleString()} ₽</span>
                          </div>
                        ) : (
                          <div className="p-3 bg-gaming-black/50 rounded border border-gaming-gray border-dashed">
                            <p className="text-sm text-gray-500">
                              {category === 'cpu' ? 'Процессор не выбран' : 
                               category === 'gpu' ? 'Видеокарта не выбрана' : 
                               category === 'ram' ? 'ОЗУ не выбрано' : 'Накопитель не выбран'}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                    <Separator className="bg-gaming-purple" />
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span className="text-white">Итого:</span>
                      <span className="text-gaming-pink">{calculateTotal().toLocaleString()} ₽</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-gaming-pink to-gaming-purple hover:from-gaming-purple hover:to-gaming-cyan">
                      <Icon name="ShoppingCart" className="mr-2" size={16} />
                      Добавить в корзину
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* About Tab */}
          <TabsContent value="about" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gaming-gray border-gaming-purple">
                <CardHeader>
                  <CardTitle className="text-gaming-cyan font-orbitron">О StageWave</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    StageWave — ведущий интернет-магазин игровых компьютеров и комплектующих. 
                    Мы специализируемся на сборке высокопроизводительных gaming систем с RGB подсветкой.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gaming-black rounded border border-gaming-pink">
                      <Icon name="Award" className="mx-auto mb-2 text-gaming-pink" size={24} />
                      <p className="text-sm text-white font-semibold">5 лет опыта</p>
                    </div>
                    <div className="text-center p-4 bg-gaming-black rounded border border-gaming-cyan">
                      <Icon name="Users" className="mx-auto mb-2 text-gaming-cyan" size={24} />
                      <p className="text-sm text-white font-semibold">10000+ клиентов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gaming-gray border-gaming-purple">
                <CardHeader>
                  <CardTitle className="text-gaming-cyan font-orbitron">Гарантия и сервис</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="Shield" className="text-gaming-pink" size={20} />
                      <span className="text-white">Гарантия до 3 лет</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Truck" className="text-gaming-cyan" size={20} />
                      <span className="text-white">Бесплатная доставка</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Headphones" className="text-gaming-purple" size={20} />
                      <span className="text-white">Техподдержка 24/7</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Wrench" className="text-gaming-pink" size={20} />
                      <span className="text-white">Бесплатная сборка</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-gradient-to-r from-gaming-black via-gaming-gray to-gaming-black border-gaming-cyan">
              <CardHeader>
                <CardTitle className="text-gaming-cyan font-orbitron text-center">Контакты</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <Icon name="Phone" className="mx-auto text-gaming-pink" size={24} />
                    <p className="text-white font-semibold">Телефон</p>
                    <p className="text-gray-400">+7 (800) 123-45-67</p>
                  </div>
                  <div className="space-y-2">
                    <Icon name="Mail" className="mx-auto text-gaming-cyan" size={24} />
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-400">info@stagewave.ru</p>
                  </div>
                  <div className="space-y-2">
                    <Icon name="MapPin" className="mx-auto text-gaming-purple" size={24} />
                    <p className="text-white font-semibold">Адрес</p>
                    <p className="text-gray-400">г. Москва, ул. Геймерская, 42</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gaming-black border-t border-gaming-gray py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-orbitron font-bold bg-gradient-to-r from-gaming-pink to-gaming-cyan bg-clip-text text-transparent mb-4">
              StageWave
            </h3>
            <p className="text-gray-400 mb-4">Игровые ПК нового поколения</p>
            <div className="flex justify-center space-x-6">
              <Icon name="Youtube" className="text-gaming-pink hover:text-white cursor-pointer transition-colors" size={24} />
              <Icon name="Instagram" className="text-gaming-cyan hover:text-white cursor-pointer transition-colors" size={24} />
              <Icon name="Twitter" className="text-gaming-purple hover:text-white cursor-pointer transition-colors" size={24} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;