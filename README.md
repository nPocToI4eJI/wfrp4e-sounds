<div align="center">
  
  # WFRP4e - Sounds

  <p>
    <a href="https://foundryvtt.com/packages/wfrp4e-sounds" rel="nofollow"><img src="https://img.shields.io/badge/WFRP4e%20--%20Sounds-FoundryVTT-orange?labelColor=darkred" alt="FoundryVTT"></a>
    <a href="https://foundryvtt.com/" rel="nofollow"><img src="https://img.shields.io/badge/V13-Совместимо-darkgreen?labelColor=orange" alt="Совместимость"></a>
    <a href="https://github.com/nPocToI4eJI/wfrp4e-sounds/releases" rel="nofollow"><img src="https://img.shields.io/github/v/release/nPocToI4eJI/wfrp4e-sounds?display_name=release&label=%D0%92%D0%B5%D1%80%D1%81%D0%B8%D1%8F&labelColor=darkgreen" alt="Последняя версия"></a>
    <a href="https://github.com/nPocToI4eJI/wfrp4e-sounds/releases/latest" rel="nofollow"><img src="https://img.shields.io/github/downloads/nPocToI4eJI/wfrp4e-sounds/latest/wfrp4e-sounds.zip?displayAssetName=false&label=%D0%A1%D0%BA%D0%B0%D1%87%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B9&labelColor=blue&color=darkgreen" alt="Скачивания"></a>
    <a href="https://github.com/nPocToI4eJI/wfrp4e-sounds/releases" rel="nofollow"><img src="https://img.shields.io/github/downloads/nPocToI4eJI/wfrp4e-sounds/wfrp4e-sounds.zip?displayAssetName=false&label=%D0%92%D1%81%D0%B5%D0%B3%D0%BE&labelColor=darkgreen&color=darkred" alt="Скачиваний всего"></a>
  </p>

  <p>
    <a href="https://discord.gg/tPrYvW7" rel="nofollow"><img src="https://img.shields.io/badge/Discord-black?logo=discord&logoColor=%235865F2" alt="Discord"></a>
    <a href="https://www.youtube.com/@nPocTo_4eJI" rel="nofollow"><img src="https://img.shields.io/badge/Youtube-black?logo=youtube&logoColor=%23FF0000" alt="Youtube"></a>
    <a href="https://boosty.to/npocto_4eji" rel="nofollow"><img src="https://img.shields.io/badge/Boosty-black?logo=boosty&logoColor=%23F15F2C" alt="Boosty"></a>
  </p>
  
  **[🇷🇺 Русский](#-русский) | [🇬🇧 English](#-english)**

</div>

---

<a id="-русский"></a>

**WFRP4e - Sounds** - пакет звуковых эффектов для системы **Warhammer Fantasy Roleplay 4th Edition** в Foundry VTT, подготовленный специально для работы со звуковой системой модуля [**WFRP4e - Tools**](https://github.com/nPocToI4eJI/wfrp4e-tools). Он добавляет контекстное звуковое сопровождение для боёв, проверок навыков, магии, снаряжения и критических событий, включая альтернативные звуки для «Смешного» режима.

> [!IMPORTANT]
> Для работы этого модуля **обязательно** требуется установленный и включённый базовый модуль **[WFRP4e - Tools](https://github.com/nPocToI4eJI/wfrp4e-tools)**.

### 📋 Содержание
- [Справочник и статус наполнения](#ru-spreadsheet)
- [Содержимое пакета](#ru-contents)
- [Подключение и собственные звуки](#ru-setup)
- [Помощь проекту](#ru-contribute)
- [Связанные модули](#ru-modules)

---

<a id="ru-spreadsheet"></a>
### 📊 Справочник и статус наполнения

Пакет активно наполняется и расширяется. Актуальный список всех **поддерживаемых звуковых ключей**, статус их готовности, правила именования и инструкция по подбору файлов ведутся в [📖 **WFRP4e Sounds - Справочник**](https://docs.google.com/spreadsheets/d/1FwN79LzXZ7cuEs-CFIIxmvJt3y-iPkPzE3fYUNER9B8/edit?usp=sharing)

В таблице вы найдёте:
* Полный перечень категорий, папок и ключей файлов для всех игровых событий.
* Приоритеты наполнения (*Базовые ★* и *Дополнительные*).
* Текущий прогресс загрузки файлов.
* Подробную инструкцию и примеры поисковых запросов для подбора собственных звуков.

---

<a id="ru-contents"></a>
### 📂 Содержимое пакета

На текущий момент модуль включает **134 звуковых файла** (96 основных и 38 для «Смешного» режима). Все звуки взяты с [**Freesound** (CC0)](https://freesound.org/) и [**Pixabay** (Pixabay License)](https://pixabay.com/sound-effects/):

<details>
<summary>📋 Подробный состав по категориям</summary>

| Категория | Папка | Обычные звуки | «Смешной» режим | Примеры событий |
| :--- | :--- | :---: | :---: | :--- |
| **Оружие** | `sounds/weapon/` | 21 | 8 | Взмахи в ближнем бою и мечом, выстрелы из лука и дистанционного оружия, промахи, осечки |
| **Встречные проверки** | `sounds/opposed/` | 16 | 7 | Блок щитом, уклонение, парирование (обычное и металлическое) |
| **Попадания и урон** | `sounds/hit/` | 15 | 9 | Попадания по плоти и латам, криты, поглощение урона бронёй, падение в 0 ран |
| **Навыки** | `sounds/skill/` | 18 | 5 | Критические успехи и провалы, Кутёж (успех/провал), Сплетни, Скрытность (успех/провал) |
| **Снаряжение** | `sounds/item/` | 13 | 3 | Надевание брони, экипировка и снятие оружия, звон монет |
| **Магия** | `sounds/magic/` | 10 | 6 | Концентрация ветров, сотворение обычных и боевых заклинаний, малые проявления Хаоса |
| **Бой** | `sounds/combat/` | 3 | — | Начало раунда боя |
| **Молитвы** | `sounds/prayer/` | — | — | *Папка подготовлена; звуки в разработке* |

</details>

---

<a id="ru-setup"></a>
### 🛠️ Подключение и собственные звуки

1. Установите и включите модули **WFRP4e - Tools** и **WFRP4e - Sounds**.
2. В настройках **WFRP4e - Tools** включите звуковые эффекты, при желании настройте громкость и «Смешной» режим.
3. По умолчанию путь к звукам указывает на `modules/wfrp4e-sounds/sounds/`.

<details>
<summary>⚙️ Как добавить или заменить звуки</summary>

Если вы хотите собрать собственный звуковой пакет или дополнить существующий:
* **Поддерживаемые форматы:** `.ogg`, `.mp3`, `.wav`, `.webm`, `.flac`, `.m4a`.
* **Варианты одного события:** добавляйте числовой суффикс к ключу из справочника (например, `sword_swing_1.ogg`, `sword_swing_2.ogg`) - модуль будет выбирать их случайно.
* **«Смешной» режим:** помещайте шуточные аналоги с теми же именами в подпапку `funny/` внутри нужной категории (например, `sounds/hit/funny/crit_normal_1.ogg`).
* **Обновление каталога:** после добавления новых файлов откройте **Меню отладки** в настройках `WFRP4e - Tools` и нажмите кнопку обновления каталога звуков или просто перезапустите мир.

*Совет: чтобы ваши пользовательские файлы не перезаписывались при обновлении модуля, скопируйте папку `sounds` в собственную директорию внутри Foundry Data и укажите её в настройке пути звуков `WFRP4e - Tools`.*

</details>

---

<a id="ru-contribute"></a>
### 🤝 Помощь проекту

Библиотека звуков продолжает расти - вы можете помочь с её наполнением!
* Загляните в **[Справочник](https://docs.google.com/spreadsheets/d/1FwN79LzXZ7cuEs-CFIIxmvJt3y-iPkPzE3fYUNER9B8/edit?usp=sharing)**, чтобы увидеть, каких звуков сейчас не хватает.
* Подходят качественные звуки со свободными лицензиями (например, с [Freesound](https://freesound.org/) или [Pixabay](https://pixabay.com/)) или собственные записи *(без использования генеративного ИИ)*.
* Присылайте предложения и подборки в наш **[Discord](https://discord.gg/tPrYvW7)** или через GitHub.

---

<a id="ru-modules"></a>
### 🧩 Связанные модули

* **[WFRP4e - Tools](https://github.com/nPocToI4eJI/wfrp4e-tools)** *(обязателен)* - базовый модуль инструментов, улучшений и исправлений для системы **Warhammer Fantasy Roleplay 4th Edition** в Foundry VTT.
* **[WFRP4e - Assistant](https://github.com/nPocToI4eJI/wfrp4e-assistant)** - этот модуль позволит Мастеру разнообразить НИП и их отыгрыш с помощью встроенных инструментов автоматизации.
* **[WFRP4e - Looting](https://github.com/nPocToI4eJI/wfrp4e-looting)** - этот модуль поможет Мастеру оптимизировать процесс создания уникального лута.

---

<a id="-english"></a>

**WFRP4e - Sounds** is a sound effects pack for **Warhammer Fantasy Roleplay 4th Edition** on Foundry VTT, built specifically for the audio system of **[WFRP4e - Tools](https://github.com/nPocToI4eJI/wfrp4e-tools)**. It adds context-aware audio feedback for combat, skill tests, magic, equipment, and critical events, including alternative sounds for "Funny" mode.

> [!IMPORTANT]
> This module **requires** the core **[WFRP4e - Tools](https://github.com/nPocToI4eJI/wfrp4e-tools)** module to be installed and enabled.

### 📋 Contents
- [Reference & Progress](#en-spreadsheet)
- [Pack Contents](#en-contents)
- [Setup & Custom Sounds](#en-setup)
- [Contributing](#en-contribute)
- [Related Modules](#en-modules)

---

<a id="en-spreadsheet"></a>
### 📊 Reference & Progress

The pack is actively growing and expanding. An up-to-date list of all **supported sound keys**, their completion status, naming rules, and guidelines for sourcing files is maintained in [📖 **WFRP4e Sounds - Reference**](https://docs.google.com/spreadsheets/d/1FwN79LzXZ7cuEs-CFIIxmvJt3y-iPkPzE3fYUNER9B8/edit?usp=sharing).

In the spreadsheet, you will find:
* A complete list of categories, folders, and file keys for all in-game events.
* Completion priorities (*Core ★* and *Additional*).
* Current file upload progress.
* Detailed instructions and sample search queries for sourcing your own sounds.

---

<a id="en-contents"></a>
### 📂 Pack Contents

The module currently includes **134 sound files** (96 standard and 38 for "Funny" mode). All sounds are sourced from [**Freesound** (CC0)](https://freesound.org/) and [**Pixabay** (Pixabay License)](https://pixabay.com/sound-effects/):

<details>
<summary>📋 Detailed Breakdown by Category</summary>

| Category | Folder | Standard Sounds | "Funny" Mode | Example Events |
| :--- | :--- | :---: | :---: | :--- |
| **Weapons** | `sounds/weapon/` | 21 | 8 | Melee and sword swings, bow and ranged shots, misses, misfires |
| **Opposed Tests** | `sounds/opposed/` | 16 | 7 | Shield blocks, dodges, parries (standard and metal) |
| **Hits & Damage** | `sounds/hit/` | 15 | 9 | Hits on flesh and plate, critical hits, damage soaked by armour, dropping to 0 Wounds |
| **Skills** | `sounds/skill/` | 18 | 5 | Critical successes and fumbles, Consume Alcohol (success/fail), Gossip, Stealth (success/fail) |
| **Equipment** | `sounds/item/` | 13 | 3 | Equipping armour, equipping and unequipping weapons, clinking coins |
| **Magic** | `sounds/magic/` | 10 | 6 | Channelling winds, casting generic and damage spells, minor miscasts |
| **Combat** | `sounds/combat/` | 3 | — | Start of combat round |
| **Prayers** | `sounds/prayer/` | — | — | *Folder prepared; sounds in development* |

</details>

---

<a id="en-setup"></a>
### 🛠️ Setup & Custom Sounds

1. Install and enable both **WFRP4e - Tools** and **WFRP4e - Sounds**.
2. In **WFRP4e - Tools** settings, enable sound effects, and optionally adjust the volume and "Funny" mode.
3. By default, the sounds path points to `modules/wfrp4e-sounds/sounds/`.

<details>
<summary>⚙️ How to Add or Replace Sounds</summary>

If you want to build your own sound pack or expand the existing one:
* **Supported formats:** `.ogg`, `.mp3`, `.wav`, `.webm`, `.flac`, `.m4a`.
* **Event variations:** add a numeric suffix to a key from the reference (e.g., `sword_swing_1.ogg`, `sword_swing_2.ogg`) - the module will pick one at random.
* **"Funny" mode:** place humorous alternatives with the same names into the `funny/` subfolder inside the target category (e.g., `sounds/hit/funny/crit_normal_1.ogg`).
* **Updating the catalog:** after adding new files, open the **Debug Menu** in `WFRP4e - Tools` settings and click the rebuild sound catalog button, or simply reload the world.

*Tip: to prevent your custom files from being overwritten during module updates, copy the `sounds` folder into your own directory inside Foundry Data and set that path in the `WFRP4e - Tools` sounds path setting.*

</details>

---

<a id="en-contribute"></a>
### 🤝 Contributing

The sound library keeps growing - you can help expand it!
* Check out the **[Reference](https://docs.google.com/spreadsheets/d/1FwN79LzXZ7cuEs-CFIIxmvJt3y-iPkPzE3fYUNER9B8/edit?usp=sharing)** to see which sounds are currently missing.
* High-quality sounds under free licenses (e.g., from [Freesound](https://freesound.org/) or [Pixabay](https://pixabay.com/)) or your own recordings *(without using generative AI)* are welcome.
* Send suggestions and sound packs via our **[Discord](https://discord.gg/tPrYvW7)** or GitHub.

---

<a id="en-modules"></a>
### 🧩 Related Modules

* **[WFRP4e - Tools](https://github.com/nPocToI4eJI/wfrp4e-tools)** *(required)* - core toolkit, quality-of-life, and bugfix module for **Warhammer Fantasy Roleplay 4th Edition** on Foundry VTT.
* **[WFRP4e - Assistant](https://github.com/nPocToI4eJI/wfrp4e-assistant)** - allows the GM to diversify NPCs and their roleplay using built-in automation tools.
* **[WFRP4e - Looting](https://github.com/nPocToI4eJI/wfrp4e-looting)** - helps the GM streamline the process of creating unique loot.
