const places = {
  mesa: { category: 'Главное место недели', title: 'Mesa Arch', country: 'США', flag: '🇺🇸', location: 'Юта, национальный парк Каньонлендс', image: 'img/mesa-arch.jpg', description: 'Каменная арка, которая на рассвете превращается в естественную рамку для солнца. Тёплый свет проходит под сводом и окрашивает каньон в медные оттенки.', details: [['Координаты', '38.3918° N, 109.8659° W'], ['Лучшее время', 'Апрель — октябрь'], ['Маршрут', 'Короткая прогулка 1,2 км'], ['Тип места', 'Природная достопримечательность']], fact: 'Название Mesa Arch происходит от слова mesa — плоская вершина, характерная для ландшафта юго-запада США.' },
  pitukro: { category: 'Скрытые уголки', title: 'Водопад Питукро', country: 'Таиланд', flag: '🇹🇭', location: 'Национальный парк Умпханг, провинция Так', image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=85', description: 'Мощный водопад среди тропического леса. Дорога к нему проходит через зелёные долины, ручьи и небольшие деревни, поэтому сама поездка становится частью приключения.', details: [['Координаты', '15.7200° N, 98.8500° E'], ['Лучшее время', 'Июнь — ноябрь'], ['Маршрут', 'Треккинг с проводником'], ['Сложность', 'Средняя']], fact: 'До водопада обычно добираются в составе двухдневного маршрута, потому что он находится далеко от ближайших дорог.' },
  lagoon: { category: 'Природные иллюзии', title: 'Бирюзовая лагуна', country: 'Хорватия', flag: '🇭🇷', location: 'Адриатическое побережье, Далмация', image: 'https://images.unsplash.com/photo-1507524682271-8f05f9c9a7a5?auto=format&fit=crop&w=1200&q=85', description: 'Тихая бухта с прозрачной водой, которая меняет оттенок от голубого до изумрудного. Лучше всего исследовать побережье на лодке или каяке.', details: [['Координаты', '43.5081° N, 16.4402° E'], ['Лучшее время', 'Май — сентябрь'], ['Чем заняться', 'Каякинг и снорклинг'], ['Атмосфера', 'Спокойная']], fact: 'Цвет воды кажется ярче из-за белого известнякового дна и особой прозрачности Адриатического моря.' },
  glacier: { category: 'Скрытые уголки', title: 'Ледниковая долина', country: 'Аргентина', flag: '🇦🇷', location: 'Патагония, национальный парк Лос-Гласьярес', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85', description: 'Место, где голубой лёд, горы и прозрачные озёра создают почти нереальный пейзаж. Здесь особенно хорошо ощущается масштаб природы.', details: [['Координаты', '50.4960° S, 73.1370° W'], ['Лучшее время', 'Ноябрь — март'], ['Формат', 'Треккинг и смотровые'], ['Погода', 'Переменчивая']], fact: 'Ледники Патагонии постоянно движутся: некоторые из них могут продвигаться на несколько метров за сутки.' },
  'pink-beach': { category: 'Контрасты', title: 'Розовый берег', country: 'Индонезия', flag: '🇮🇩', location: 'Остров Ломбок, пляж Tangsi', image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85', description: 'Пляж с редким розовым песком, который особенно заметен под ярким солнцем. Рядом находятся коралловые рифы и чистая вода для снорклинга.', details: [['Координаты', '8.8900° S, 116.4600° E'], ['Лучшее время', 'Апрель — октябрь'], ['Формат', 'Пляж и снорклинг'], ['Инфраструктура', 'Минимальная']], fact: 'Розовый оттенок песку придают крошечные частицы красного коралла, смешанные с белым песком.' },
  angkor: { category: 'Затерянные руины', title: 'Ангкор-Ват', country: 'Камбоджа', flag: '🇰🇭', location: 'Сиемреап, археологический парк Ангкор', image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=85', description: 'Грандиозный храмовый комплекс, где древняя архитектура постепенно срастается с джунглями. Рассвет над башнями — один из самых узнаваемых видов Азии.', details: [['Координаты', '13.4125° N, 103.8670° E'], ['Лучшее время', 'Ноябрь — февраль'], ['Формат', 'Пешая прогулка'], ['Совет', 'Закрытые плечи и колени']], fact: 'Ангкор-Ват считается крупнейшим религиозным сооружением в мире, а его силуэт изображён на флаге Камбоджи.' },
  alps: { category: 'Ночные пейзажи', title: 'Ночь над Альпами', country: 'Швейцария', flag: '🇨🇭', location: 'Горные озёра и альпийские долины', image: 'img/hero-stars.jpg', description: 'Высоко в горах небо становится почти осязаемым. Отражение звёзд в холодной воде и тишина вокруг превращают обычную ночь в отдельное путешествие.', details: [['Регион', 'Швейцарские Альпы'], ['Лучшее время', 'Июнь — сентябрь'], ['Формат', 'Наблюдение за звёздами'], ['Уровень света', 'Минимальный']], fact: 'Вдали от городов человеческий глаз может увидеть тысячи звёзд без телескопа.' },
  palau: { category: 'Скрытые уголки', title: 'Каменные острова', country: 'Палау', flag: '🇵🇼', location: 'Южная лагуна архипелага Палау', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85', description: 'Сотни зелёных островов возвышаются над прозрачной водой, образуя пейзаж, похожий на скульптуру. Между островами можно плавать на каяке.', details: [['Координаты', '7.3000° N, 134.4000° E'], ['Лучшее время', 'Октябрь — май'], ['Формат', 'Каякинг и дайвинг'], ['Особенность', 'Морская лагуна']], fact: 'Каменные острова сформировались из древних коралловых рифов, поднявшихся над водой и покрывшихся лесом.' },
  'new-zealand': { category: 'Природные иллюзии', title: 'Дорога в облака', country: 'Новая Зеландия', flag: '🇳🇿', location: 'Южный остров, горные перевалы', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85', description: 'Горная дорога, где туман быстро меняет пейзаж. За одним поворотом открывается долина, а за другим — каменные вершины, уходящие в облака.', details: [['Регион', 'Южный остров'], ['Лучшее время', 'Декабрь — март'], ['Формат', 'Автомобильный маршрут'], ['Совет', 'Проверять погоду']], fact: 'В Новой Зеландии снимали множество фантастических фильмов благодаря необычному сочетанию зелёных долин и суровых гор.' },
  aurora: { category: 'Природные иллюзии', title: 'Северное сияние', country: 'Норвегия', flag: '🇳🇴', location: 'Тромсё и северное побережье', image: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1200&q=85', description: 'Зелёные и фиолетовые ленты света появляются, когда частицы солнечного ветра встречаются с магнитным полем Земли. Вживую это выглядит почти нереально.', details: [['Координаты', '69.6492° N, 18.9553° E'], ['Лучшее время', 'Сентябрь — март'], ['Формат', 'Ночная вылазка'], ['Условие', 'Тёмное небо']], fact: 'Северное сияние происходит постоянно, но с поверхности Земли его видно только при подходящей темноте и ясной погоде.' },
  salar: { category: 'Природные иллюзии', title: 'Зеркало Уюни', country: 'Боливия', flag: '🇧🇴', location: 'Солончак Уюни, департамент Потоси', image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=85', description: 'После дождя крупнейший солончак планеты покрывается тонким слоем воды и превращается в огромное природное зеркало.', details: [['Координаты', '20.1338° S, 67.4891° W'], ['Лучшее время', 'Январь — март'], ['Формат', 'Экспедиция на джипе'], ['Высота', 'Около 3650 м']], fact: 'Солончак Уюни содержит значительную часть мировых запасов лития, а его поверхность используется для калибровки спутников.' },
  cappadocia: { category: 'Природные иллюзии', title: 'Каппадокия', country: 'Турция', flag: '🇹🇷', location: 'Гёреме, регион Каппадокия', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=85', description: 'Долины с каменными башнями и воздушные шары на рассвете создают один из самых узнаваемых пейзажей Турции.', details: [['Координаты', '38.6431° N, 34.8289° E'], ['Лучшее время', 'Апрель — октябрь'], ['Формат', 'Полёт и пешие маршруты'], ['Город', 'Гёреме']], fact: 'Фантастические формы скал появились благодаря миллионам лет эрозии вулканического туфа.' },
  santorini: { category: 'Контрасты', title: 'Белые скалы Санторини', country: 'Греция', flag: '🇬🇷', location: 'Остров Санторини, Эгейское море', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85', description: 'Белые дома на вулканических скалах, синее море и тёплый свет заката. Санторини показывает, как архитектура может продолжать линию природы.', details: [['Координаты', '36.3932° N, 25.4615° E'], ['Лучшее время', 'Май — октябрь'], ['Формат', 'Прогулка по острову'], ['Особенность', 'Вулканический ландшафт']], fact: 'Остров Санторини — часть вулканической кальдеры, значительная часть которой находится под водой.' }
};

const modal = document.querySelector('#place-modal');
const modalImage = document.querySelector('#modal-image');
const modalCategory = document.querySelector('#modal-category');
const modalTitle = document.querySelector('#modal-title');
const modalDescription = document.querySelector('#modal-description');
const modalLocation = document.querySelector('#modal-location');
const modalDetails = document.querySelector('#modal-details');
const modalFact = document.querySelector('#modal-fact');
let lastFocusedElement;

function openPlace(placeId) {
  const place = places[placeId];
  if (!place) return;
  lastFocusedElement = document.activeElement;
  modalImage.src = place.image;
  modalImage.alt = place.title;
  modalCategory.textContent = place.category;
  modalTitle.textContent = place.title;
  modalDescription.textContent = place.description;
  modalLocation.innerHTML = `<span class="flag">${place.flag}</span><span>${place.country} · ${place.location}</span>`;
  modalDetails.innerHTML = place.details.map(([label, value]) => `<div class="modal-detail"><small>${label}</small><strong>${value}</strong></div>`).join('');
  modalFact.textContent = place.fact;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close').focus();
}

function closePlace() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lastFocusedElement?.focus();
}

document.querySelectorAll('.place-button').forEach((card) => {
  card.addEventListener('click', () => openPlace(card.dataset.place));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openPlace(card.dataset.place);
    }
  });
});
document.querySelectorAll('[data-close-modal]').forEach((element) => element.addEventListener('click', closePlace));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) closePlace();
});

