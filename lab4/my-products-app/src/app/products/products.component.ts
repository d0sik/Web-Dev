import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
@Component({
  standalone: true,
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
	products = [
		{
			name: "Стул C06",
			image: "https://resources.cdn-kaspi.kz/img/m/p/pdd/p2b/3187771.jpg?format=preview-large",
			descr: "Благодаря сочетанию пластика с металлом и деревом изделие органично вписывается практически в любую среду, делая обстановку более естественной и «живой». Еще одно достоинство модели – удобная для обеденного стола высота",
			rating: 5,
			link: "https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000"
		},
		{
			name: "Morbido диван",
			image: "https://resources.cdn-kaspi.kz/img/m/p/h9b/h48/86777038274590.png?format=gallery-medium",
			descr: "Практичный  диван-кровать с легкой системой трансформации. Каркас изготовлен из ДСП, деревянный брус. Мягкие элементы выполнены из пенополиуретана.",
			rating: 4,
			link: "https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000"
		},
		{
			name: "Игровое кресло 501126",
			image: "https://resources.cdn-kaspi.kz/img/m/p/h17/h2b/86703072149534.png?format=gallery-medium",
			descr: "Упругий наполнитель гарантирует устойчивость посадки, а экокожа – прочность и износостойкость.",
			rating: 5,
			link: "https://kaspi.kz/shop/p/igrovoe-kreslo-501126-chernyi-111098602/?c=750000000"
		},
		{
			name: "Кровать Mod Beds",
			image: "https://resources.cdn-kaspi.kz/img/m/p/hfd/h7b/84983882711070.jpg?format=gallery-medium",
			descr: "Кровать имеет высокое изголовье, такое дизайнерское решение визуально отгораживает спальное место от комнаты, создает вокруг него атмосферу уюта и спокойствия.",
			rating: 2,
			link: "https://kaspi.kz/shop/p/mod-beds-polosy-dvuspal-naja-160x200-sm-s-matrasom-bez-pod-jomnogo-mehanizma-svetlo-seryi-107335893/?c=750000000"
		},
		{
			name: "ТВ-тумба напольная Modern New Design",
			image: "https://resources.cdn-kaspi.kz/img/m/p/h02/hda/67423804784670.jpg?format=gallery-medium",
			descr: "180x40x35 см, белый, коричневый",
			rating: 3,
			link: "https://kaspi.kz/shop/p/tv-tumba-napol-naja-modern-new-design-tt-180x40x35-sm-belyi-korichnevyi-108268540/?c=750000000"
		}, 
		{
			name: "Журнальный столик приставной",
			image: "https://resources.cdn-kaspi.kz/img/m/p/hd2/hd7/84077509967902.jpg?format=gallery-medium",
			descr: "Легкий приставной столик, подойдет под любой интерьер. Поставляется в разобранном виде, очень прост в сборке.",
			rating: 4,
			link: "https://kaspi.kz/shop/p/zhurnal-nyi-stolik-pristavnoi-40x40x62-sm-chernyi-belyi-113594562/?c=750000000"
		},
		{
			name: "Шкаф-витрина AsiaBrand",
			image: "https://resources.cdn-kaspi.kz/img/m/p/h09/h0f/63937653375006.jpg?format=gallery-medium",
			descr: "Горка для гостиной Версаль отлично подойдет для вашей гостиной комнаты. Большой и вместительный шкаф с полками для посуды и прочего.",
			rating: 5,
			link: "https://kaspi.kz/shop/p/shkaf-vitrina-asiabrand-napol-nyi-versal-220h310h50-sm-100812673/?c=750000000"
		},
		{
			name: "Стол письменный Памир",
			image: "https://resources.cdn-kaspi.kz/img/m/p/hfc/h6e/63949674545182.jpg?format=gallery-medium",
			descr: "Стол компьютерный письменный с ящиками и надстройкой это удобное и функциональное рабочее место.",
			rating: 1,
			link: "https://kaspi.kz/shop/p/stol-pis-mennyi-pamir-pks-6-57x123x160-sm-belyi-korichnevyi-101011101/?c=750000000"
		},
		{
			name: "Тумба для обуви Euromebel",
			image: "https://resources.cdn-kaspi.kz/img/m/p/pa4/p98/4312473.jpg?format=gallery-medium",
			descr: "Тумба для обуви 'Euromebel' – это стильное и компактное решение для организации хранения обуви в вашей прихожей.",
			rating: 4,
			link: "https://kaspi.kz/shop/p/tumba-dlja-obuvi-euromebel-mika-3d-00060757-60x25x119-sm-belyi-zolotistyi-124292276/?c=750000000"
		},
		{
			name: "Комод Letta",
			image: "https://resources.cdn-kaspi.kz/img/m/p/h6b/h19/66587835891742.jpg?format=gallery-medium",
			descr: "Комод с ящиками будет уместен везде: спальня, гостиная, детская. Вы можете использовать его для хранения вещей, для сувениров, для цветов.",
			rating: 2,
			link: "https://kaspi.kz/shop/p/komod-letta-ul-tra-46249842-75x33x73-sm-belyi-107926618/?c=750000000"
		}
	]
	share(link: string) {
    	const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
		window.open(telegramUrl);
  	}

}
