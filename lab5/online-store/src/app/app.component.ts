import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [ProductListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'online-store';
  categories = ['Electronics', 'Sports', 'Furniture', 'Books'];
  selectedCategory: string | null = null;

  products: Product[] = [
    {
      id: 1,
      name: 'Стул C06',
      category: 'Furniture',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p33/p2b/3187777.jpg?format=gallery-medium',
      descr:
        'Благодаря сочетанию пластика с металлом и деревом изделие органично вписывается практически в любую среду.',
      rating: 5,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000',
    },
    {
      id: 2,
      name: 'Morbido диван',
      category: 'Furniture',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h9b/h48/86777038274590.png?format=gallery-medium',
      descr:
        'Практичный  диван-кровать с легкой системой трансформации. Каркас изготовлен из ДСП, деревянный брус. Мягкие элементы выполнены из пенополиуретана.',
      rating: 4,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000',
    },
    {
      id: 3,
      name: 'Игровое кресло 501126',
      category: 'Furniture',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h17/h2b/86703072149534.png?format=gallery-medium',
      descr:
        'Упругий наполнитель гарантирует устойчивость посадки, а экокожа – прочность и износостойкость.',
      rating: 5,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/igrovoe-kreslo-501126-chernyi-111098602/?c=750000000',
    },
    {
      id: 4,
      name: 'Кровать Mod Beds',
      category: 'Furniture',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hfd/h7b/84983882711070.jpg?format=gallery-medium',
      descr:
        'Кровать имеет высокое изголовье, такое дизайнерское решение визуально отгораживает спальное место от комнаты, создает вокруг него атмосферу уюта и спокойствия.',
      rating: 2,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/mod-beds-polosy-dvuspal-naja-160x200-sm-s-matrasom-bez-pod-jomnogo-mehanizma-svetlo-seryi-107335893/?c=750000000',
    },
    {
      id: 5,
      name: 'ТВ-тумба напольная Modern New Design',
      category: 'Furniture',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h02/hda/67423804784670.jpg?format=gallery-medium',
      descr: '180x40x35 см, белый, коричневый',
      rating: 3,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/tv-tumba-napol-naja-modern-new-design-tt-180x40x35-sm-belyi-korichnevyi-108268540/?c=750000000',
    },

    {
      id: 6,
      name: 'Ноутбук Apple MacBook Air',
      category: 'Electronics',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      descr:
        'MacBook Air 2022 года можно назвать одним из крупнейших обновлений линейки за всю историю.',
      rating: 5,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
    },
    {
      id: 7,
      name: 'Ноутбук Lenovo IdeaPad',
      category: 'Electronics',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-medium',
      descr:
        'IdeaPad 3 стоит, как обычный ноутбук для повседневного использования, однако это устройство способно на большее.',
      rating: 2,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-4-gb-ssd-256-gb-bez-os-15igl05-81wq00emrk-102878742/?c=750000000',
    },
    {
      id: 8,
      name: 'Ноутбук Acer Aspire 3',
      category: 'Electronics',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/hc8/84558388887582.jpg?format=gallery-medium',
      descr: 'Воспроизводите видео быстро и без задержек.',
      rating: 3,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-a315-35-nx-a9aex-00h-114792265/?c=750000000',
    },
    {
      id: 9,
      name: 'Ноутбук ThundeRobot 911S',
      category: 'Electronics',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
      descr:
        'Игровой ноутбук Thunderobot 911S Core D JT009K00F — 15.6-дюймовая модель с IPS-матрицей и разрешением 1920х1080 пикселей.',
      rating: 4,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000',
    },
    {
      id: 10,
      name: 'Ноутбук HP Laptop',
      category: 'Electronics',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/pfa/12037040.jpg?format=gallery-medium',
      descr: '15-fc0072ci 15.6 / 8 Гб / SSD 512 Гб / Без ОС / A19WCEA',
      rating: 1,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/tv-tumba-napol-naja-modern-new-design-tt-180x40x35-sm-belyi-korichnevyi-108268540/?c=750000000',
    },

    {
      id: 11,
      name: 'Велосипед Pro-Fi',
      category: 'Sports',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/ha8/h4f/86363928887326.png?format=gallery-medium',
      descr:
        'Характеристики Велосипед Pro-Fi горный-городской 26 дюйм 2022 18 дюймов черный.',
      rating: 5,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/pro-fi-gornyi-gorodskoi-26-djuim-2022-18-djuimov-chernyi-104336542/?c=750000000',
    },
    {
      id: 12,
      name: 'Мяч Mikasa',
      category: 'Sports',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h86/hef/63852919095326.jpg?format=gallery-medium',
      descr:
        'Вес и диаметр мяча соответствуют требованиям Международной федерации волейбола FIVB.',
      rating: 4,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/mikasa-v200w-dlja-voleibola-5-d67-100134795/?c=750000000',
    },
    {
      id: 13,
      name: 'Штанга SAQ',
      category: 'Sports',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h13/h1b/86216185348126.jpg?format=gallery-medium',
      descr:
        'Штанга SAQ 55 кг - это идеальное фитнес-оборудование для любого домашнего тренажерного зала и отличный подарок.',
      rating: 5,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/shtanga-saq-55-kg-2-sht-150-sm-115868864/?c=750000000',
    },
    {
      id: 14,
      name: 'Коньки 906-1',
      category: 'Sports',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hb0/hd7/84943818522654.jpg?format=gallery-medium',
      descr:
        'Фигурные коньки SHYN SPORT 906-1, выполнены из искусственной кожи, с усиленной конструкцией для надежной поддержки.',
      rating: 4,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/figurnye-906-1-belyi-37-115973104/?c=750000000',
    },
    {
      id: 15,
      name: 'Перчатки MMA1784',
      category: 'Sports',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h76/hc6/85535889293342.jpg?format=gallery-medium',
      descr:
        'Наши перчатки MMA - идеальное сочетание прочности, комфорта и стиля.',
      rating: 5,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/mma1784-chernyi-m-117386319/?c=750000000',
    },

    {
      id: 16,
      name: 'Атомные привычки',
      category: 'Books',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h4c/h9a/86244289314846.png?format=gallery-medium',
      descr: 'Лучшая деловая книга 2018 года по версии Fast Company.',
      rating: 5,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/klir-d-atomnye-privychki-117680550/?c=750000000',
    },
    {
      id: 17,
      name: 'Самый богатый человек в Вавилоне',
      category: 'Books',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hb9/h29/66560068780062.jpg?format=gallery-medium',
      descr:
        '10 всемирно известных притч, которые полностью меняют ваше мышление.',
      rating: 5,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/kleison-d-samyi-bogatyi-chelovek-v-vavilone-107914652/?c=750000000',
    },
    {
      id: 18,
      name: 'О науке и искусстве',
      category: 'Books',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h79/he9/64091924758558.jpg?format=gallery-medium',
      descr:
        'Еще при жизни Леонардо да Винчи ходили легенды.',
      rating: 5,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/da-vinchi-l-o-nauke-i-iskusstve-101517279/?c=750000000',
    },
    {
      id: 19,
      name: 'Говори красиво и уверенно. Постановка голоса и речи',
      category: 'Books',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h12/h47/85975856611358.jpg?format=gallery-medium',
      descr:
        'Что такое наш голос? Это прежде всего инструмент. Музыкальный, тонко устроенный, сложный, неповторимый.',
      rating: 5,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/shestakova-e-s-govori-krasivo-i-uverenno-postanovka-golosa-i-rechi-104907725/?c=750000000',
    },
    {
      id: 20,
      name: 'Спеши любить',
      category: 'Books',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/ha5/h1b/63846893322270.jpg?format=gallery-medium',
      descr:
        'Тихий городок Бофор. Каждый год Лэндон Картер приезжает сюда, чтобы вспомнить историю своей первой любви…',
      rating: 5,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/sparks-n-speshi-ljubit--100259730/?c=750000000',
    },
  ];

  filteredProducts() {
    return this.products.filter((p) => p.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  removeProduct(productID: number) {
    this.products = this.products.filter(p => p.id !== productID);
  }
}
