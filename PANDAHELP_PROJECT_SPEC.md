# PandaHelp — Product & Website Specification

Version: 1.0  
Status: source of truth for the first public website  
Language of the public website: Russian  
Primary market: Kazakhstan, initially Astana + remote work across Kazakhstan  

---

## 1. What PandaHelp is

PandaHelp is a small personal IT-help service built around the nickname/identity **PandaMan**.

The service should feel like a reliable, understandable person you can message when you have an IT problem — not a faceless service center and not a corporate IT company.

Main idea:

> **PandaHelp — понятная IT-помощь без лишней возни.**

The service starts with two active directions:

1. **PandaStudy** — help with understanding IT labs, assignments and topics.
2. **PandaRemote** — remote help with software, setup and common computer problems.

A third direction exists visually but is not active yet:

3. **PandaGo** — on-site IT help in Astana. Status: **temporarily unavailable**.

The website must make it obvious that PandaHelp is a small, human, personal service. Do not make it look like a large company with a fake team, fake support department or fake corporate scale.

---

## 2. Main business goal

The website has one primary purpose:

**turn a visitor into a conversation in Telegram or WhatsApp.**

The site is not an online store and does not need registration, accounts, online payment, a dashboard or a complicated booking system in v1.

Desired user journey:

1. Visitor opens the site.
2. In a few seconds understands what PandaHelp does.
3. Finds the relevant service.
4. Understands the approximate price and rules.
5. Clicks Telegram or WhatsApp.
6. Sends the problem, screenshots/materials and deadline if there is one.
7. PandaHelp evaluates the task for free.
8. Price and approximate timing are agreed before work begins.

---

## 3. Brand personality

PandaHelp should feel:

- human;
- calm;
- clear;
- friendly;
- competent without pretending to know everything;
- honest;
- modern;
- slightly playful because of the panda identity;
- serious enough that an adult user is comfortable paying for the service.

The key emotional impression should be:

> “Это нормальный человек, которому можно просто скинуть проблему и получить понятный ответ без пафоса.”

The site must NOT feel:

- childish;
- like a school project;
- like a crypto/Web3 startup;
- like a generic AI-generated landing page;
- like a fake cybersecurity/hacker service;
- aggressively sales-oriented;
- overly corporate;
- overloaded with marketing language.

---

## 4. Visual direction

### General style

Use a restrained, simple visual system.

Base palette:

- white;
- near-black / charcoal;
- light neutral gray;
- optionally one muted accent color used sparingly.

If an accent is used, a subtle muted bamboo/green tone can fit the panda identity, but it must remain secondary.

Do not use many unrelated colors.

### Avoid

- neon hacker green;
- cyberpunk;
- excessive gradients;
- glassmorphism everywhere;
- huge glowing buttons;
- rainbow backgrounds;
- constant animations;
- giant rounded cards for every single sentence;
- excessive emoji;
- 3D illustrations everywhere;
- fake dashboards;
- decorative terminal windows that do not serve a purpose;
- “AI startup” visual clichés.

### Typography

Typography must be clean, readable and neutral.

Use one main sans-serif family or a high-quality system stack. Avoid decorative fonts for body text.

Headings may be bold, but not oversized to the point where the hero contains only five words on an entire screen.

### Panda identity

The panda should be a recognizable brand element, not a children’s cartoon.

Possible uses:

- compact logo mark;
- small mascot illustration in the hero;
- subtle icon/detail in service states;
- “PandaGo temporarily unavailable” state;
- small visual accent in FAQ/contact area.

Do not put pandas everywhere.

If no final mascot asset exists yet, the first version should use a clean temporary mark or minimal panda-style icon without making the whole design depend on it.

---

## 5. Design references and principles

The site should borrow **principles**, not copy layouts, from good service websites.

Useful patterns observed in established tech-support sites:

- explain the problem solved immediately;
- make remote support a first-class service rather than hiding it;
- show simple transparent pricing or starting prices;
- tell the customer the price before work begins;
- do not force the customer to understand technical terminology before contacting support;
- use clear “How it works” steps;
- show real communication hours;
- make contact options obvious;
- emphasize that the customer stays in control during remote access;
- use outcome/solution-based pricing where appropriate rather than making the customer watch the clock.

The final UI should be cleaner and smaller than a typical service-center website.

---

## 6. Tone of voice and copy rules

This is extremely important.

All public Russian copy must sound like something a normal person wrote manually for a real small service.

### Desired tone

- simple Russian;
- short direct sentences;
- no unnecessary official language;
- no exaggerated promises;
- no fake friendliness;
- no motivational filler;
- no corporate jargon;
- no excessive “мы”, because PandaHelp is currently run by one person.

### Good style examples

Good:

> Скиньте задачу или скрин ошибки. Я сначала посмотрю и скажу, смогу ли помочь.

Good:

> Цена зависит от самой задачи. Согласуем её до начала работы.

Good:

> Если это лабораторная, лучше прислать её заранее — мне нужно время разобраться в материале и подготовить нормальное объяснение.

Good:

> Не знаете, подходит ли ваша проблема? Просто напишите.

### Bad AI-style examples

Do NOT write things like:

> “В современном цифровом мире технологии играют важнейшую роль в нашей повседневной жизни...”

Do NOT write:

> “Мы предлагаем широкий спектр высококачественных инновационных IT-решений, адаптированных под ваши уникальные потребности.”

Do NOT write:

> “Ваш надёжный партнёр в мире технологий.”

Do NOT write:

> “Быстро. Качественно. Надёжно.”

unless these words are genuinely needed in a specific context.

Do not fill sections with generic statements just to make them look larger.

Every paragraph should answer a real user question.

---

## 7. Target audiences

### 7.1 Students

Main initial audience.

Typical situations:

- “Мне завтра защищать лабу, а я не понимаю, что там происходит.”
- “Я сделал работу, но не понимаю команды.”
- “Нужно разобраться с Packet Tracer / Wireshark / SQL / Linux.”
- “Не получается установить PostgreSQL.”
- “Хочу понять тему перед защитой.”

The service should not present itself as a cheating/assignment factory.

The preferred model is:

**understand the topic → understand the task → do or review the work together → prepare for questions.**

### 7.2 Regular computer users

People who need help with software or settings and do not want to spend hours troubleshooting by themselves.

Typical situations:

- application does not install;
- something stopped working;
- need to configure software;
- need a development environment;
- Git/Python/PostgreSQL setup;
- Linux configuration issue;
- simple network/Wi-Fi troubleshooting;
- user sees an error and does not know what it means.

### 7.3 Future on-site customers

People in Astana who may later want in-person help.

This audience is acknowledged but **PandaGo is currently unavailable**.

---

## 8. Service 1 — PandaStudy

### What PandaStudy sells

PandaStudy is NOT sold by the hour by default.

The customer pays for a specific prepared explanation / task review, not for a stopwatch.

The price should reflect:

- complexity of the material;
- time needed to review it before the session;
- preparation of an explanation plan;
- complexity of the lab/assignment;
- whether preparation for defense/questions is needed.

### Core promise

> **Не просто получить готовый ответ, а разобраться в работе так, чтобы потом самому понимать, что происходит.**

### Typical supported topics at launch

- Linux basics;
- command line / terminal basics;
- Git and GitHub;
- SQL;
- PostgreSQL;
- database basics;
- computer networks basics;
- IPv4 / IPv6 basics;
- Packet Tracer;
- Wireshark;
- Python basics;
- C++ basics;
- programming fundamentals;
- operating system basics;
- review of IT laboratory assignments;
- preparation for laboratory defense.

Do not claim expert-level teaching in all IT fields.

Include a simple fallback:

> Если темы нет в списке — всё равно можете скинуть задание. Я сначала посмотрю и честно скажу, смогу ли помочь.

### How PandaStudy works

1. Customer sends the task/materials.
2. Customer says what exactly is unclear.
3. Customer states the deadline if there is one.
4. Initial evaluation is free.
5. PandaHelp decides whether the task can be taken.
6. Approximate preparation time and fixed/estimated price are agreed.
7. If preparation is required, 50% prepayment is made.
8. PandaHelp reviews the material and prepares an explanation plan.
9. Session takes place through a suitable online call/screen-sharing format.
10. If relevant, finish with a short mock defense / questions to check understanding.

### Timing rule

No universal guaranteed completion time should be advertised.

Use this principle:

> Срок зависит от задачи. После бесплатной оценки я скажу, сколько времени примерно нужно на подготовку.

For study work, materials should be sent in advance.

Suggested wording:

> Если это лабораторная или большая тема, лучше прислать материалы заранее. Мне нужно время ознакомиться с работой и подготовить понятный план разбора.

Urgent requests are allowed only if there is free time and enough time to prepare properly.

No promise to rescue a defense that begins in 5–10 minutes.

### Reports

PandaHelp may help structure, edit or prepare a laboratory report as part of the work.

Public website copy should focus on help with the report, not on claims about bypassing AI detection or academic checks.

Do not promise any AI-detection result.

---

## 9. PandaStudy launch pricing

Pricing should be slightly below the lower-middle part of the current Astana tutoring/programming-help market because PandaHelp is new and has no established review history yet.

The site should present prices as **starting/reference prices**, not rigid quotes.

Recommended launch prices:

- Initial task/lab evaluation — **free**
- Small topic / one simple task — **from 1,500 KZT**
- Standard lab review/explanation — **from 2,500 KZT**
- Larger or more complex lab — **from 3,500 KZT**
- Defense preparation for an already completed lab — **from 2,000 KZT**
- Lab explanation + defense preparation — **from 4,000 KZT**
- Report help — **from 1,500 KZT**, or included in a larger agreed package

Do not expose a huge price matrix on the homepage.

Show only the most understandable starting prices and explain that exact pricing comes after the free review.

---

## 10. Service 2 — PandaRemote

PandaRemote is remote software/setup help.

At launch, PandaHelp should only advertise tasks that are reasonably safe and realistic for a beginner/intermediate IT student.

### Available types of work

- installation of common software;
- basic software configuration;
- help with installation errors;
- VS Code setup;
- Git setup;
- GitHub setup;
- SSH basics/setup;
- Python environment setup;
- Node.js/npm environment setup;
- PostgreSQL setup;
- MySQL setup;
- developer environment setup;
- Linux package/application problems;
- basic Linux configuration;
- basic Windows software/settings help;
- browser/application setup;
- basic network connectivity diagnostics;
- basic Wi-Fi troubleshooting at the software/configuration level;
- other small software problems after free evaluation.

### Do NOT advertise at launch

- motherboard repair;
- soldering;
- advanced hardware repair;
- advanced data recovery;
- RAID recovery;
- BIOS recovery as a guaranteed service;
- complex malware incident response;
- enterprise infrastructure;
- “I can fix absolutely any computer problem.”

### Core wording

> Опишите проблему и скиньте скрин, если он есть. Я сначала бесплатно посмотрю, смогу ли помочь, и назову цену до начала работы.

---

## 11. PandaRemote launch pricing

Current local service marketplaces commonly start around the low-thousands of KZT for software setup and basic computer help. PandaHelp should launch slightly cheaper than established specialists, while still valuing the time spent.

Recommended starting prices:

- Initial problem evaluation — **free**
- Very small/simple remote help — **from 1,500 KZT**
- Install + basic configuration of one application — **from 2,000 KZT**
- Troubleshoot an application/software error — **from 2,000 KZT**
- Git / GitHub / SSH basic setup — **from 2,000 KZT**
- Python / Node.js / VS Code environment — **from 2,500 KZT**
- PostgreSQL / MySQL setup — **from 2,500 KZT**
- Full development/study environment setup — **from 3,500 KZT**
- Multi-part or unusual task — **price after evaluation**

Again, avoid a giant technical price catalog.

The public message should be:

> Простая помощь — от 1 500 ₸. Точную цену скажу после бесплатной оценки задачи.

---

## 12. Service 3 — PandaGo

PandaGo represents future on-site help in Astana.

Current status:

**Temporarily unavailable.**

The section may be visible so users understand that PandaHelp can grow into this direction, but there must be no active booking CTA.

Recommended wording:

> **PandaGo — временно недоступен**  
> Выездная помощь по Астане появится позже. Пока PandaHelp работает онлайн.

Avoid listing router/printer/hardware services as currently available.

---

## 13. First-client launch offer

For the first launch phase:

**First 5 completed clients receive a 20% launch discount.**

The purpose is to build initial real experience and collect honest reviews.

Never require a positive review.

Acceptable wording:

> На старте первым 5 клиентам — скидка 20%. После работы можно оставить честный отзыв, если захотите.

When the first five clients are completed, this offer should be easy to remove from the site.

Do not build the whole design around the promotion.

---

## 14. Payment rules

Supported payment methods:

- Kaspi transfer;
- Halyk transfer.

For work that requires preparation/reserved time:

- 50% prepayment after the task, price and approximate timing are agreed;
- remaining 50% after completion.

If PandaHelp accepts a task and later determines that it cannot deliver the agreed work, the prepayment is returned.

Do not charge before the free initial evaluation and agreement.

Recommended public wording:

> После бесплатной оценки согласуем цену. Для задач, где нужна подготовка или бронь времени, предоплата — 50%. Остальное после работы.

---

## 15. Cancellation / rescheduling

Study sessions require preparation and reserved time.

If the customer warns reasonably in advance:

- reschedule can be discussed; or
- prepayment can be returned, depending on whether preparation has already been substantially completed.

If the customer cancels immediately before the scheduled session after preparation has already been completed and time reserved, the prepayment may be retained.

The website should not use aggressive legal wording.

Simple version:

> Если планы изменились — предупредите заранее, и спокойно договоримся о переносе. При отмене прямо перед занятием предоплата может не возвращаться, потому что время уже было забронировано, а материалы подготовлены.

---

## 16. Remote access and safety

Remote-control software may only be used with the customer’s explicit consent.

The exact remote-access tool will be selected later and must not be hard-coded into the brand message yet.

Rules:

- customer agrees before remote access begins;
- customer can watch what is happening on screen;
- customer can terminate the session at any time;
- customer should enter passwords personally whenever possible;
- PandaHelp does not ask for banking passwords, card PINs, email passwords or other unrelated credentials;
- sensitive personal data should not be copied or retained unless strictly necessary and explicitly agreed.

Suggested public wording:

> Если нужен удалённый доступ, подключение начинается только с вашего согласия. Вы видите всё, что происходит на экране, и можете завершить сеанс в любой момент.

---

## 17. Privacy

Default rule:

Customer information, tasks, files and conversations are private.

PandaHelp does not publicly share who requested help or what they sent.

Reviews, screenshots, case descriptions or interesting work moments may only be published with the customer’s permission.

Before publication, identifying information should be removed where possible:

- full name;
- phone number;
- email;
- usernames;
- student IDs;
- IP addresses;
- private documents;
- account information;
- other unnecessary personal data.

Recommended simple wording:

> Ваши файлы, переписка и сама работа остаются между нами. Отзывы или кейсы публикую только с разрешения.

---

## 18. Contact details

### Primary contact channels

**Telegram:** @Pandammann  
**WhatsApp:** +7 708 219 2045

### Calls

Phone: **+7 708 219 2045**

Calls are accepted strictly during:

**09:00–22:00 (Astana time)**

Outside this time, users should write instead of calling.

### Messages

Messages can be sent at any time.

Desired wording:

> Писать можно в любое время. Если я онлайн — отвечу сразу, если нет — отвечу, когда освобожусь.

### Email

**farhatnurzhan@gmail.com**

Email is an additional, non-primary channel.

Desired wording:

> Почта тоже есть, но Telegram или WhatsApp быстрее.

Do not pretend email is monitored constantly.

---

## 19. What the customer should send in the first message

The site should make the first contact easy by giving a short checklist.

Ask for:

1. What happened / what needs to be done.
2. What exactly the customer wants as the result.
3. Screenshot/photo/error message/materials if available.
4. For study tasks: the assignment/lab/materials.
5. Deadline, defense date or urgency if relevant.
6. Device/OS/application information if relevant to a technical problem.

Keep the public version compact.

Suggested site copy:

### Что написать в первом сообщении

- коротко опишите проблему;
- приложите скрин или материалы, если они есть;
- если есть дедлайн — сразу напишите его;
- для лабораторной скиньте само задание и скажите, что именно непонятно.

> Этого достаточно, чтобы я сначала бесплатно посмотрел задачу и сказал, смогу ли помочь.

---

## 20. Availability and expectations

PandaHelp is not a 24/7 call center.

The site should be transparent about this without sounding unavailable.

Rules:

- messages: anytime;
- response: when available;
- calls: 09:00–22:00 Astana time;
- study work: preferably booked in advance;
- timing: estimated individually after evaluation;
- no guarantee that every task will be accepted.

Strong trust-building line:

> Если задача не моя — скажу сразу, а не буду брать деньги и разбираться за ваш счёт.

---

## 21. Homepage information architecture

The first version should preferably be a single-page website.

Recommended section order:

### 1. Header

Compact.

Include:

- PandaHelp logo/name;
- Услуги;
- Как это работает;
- Цены;
- Правила;
- FAQ;
- contact CTA.

On mobile, use a simple menu and keep the main contact action easy to reach.

### 2. Hero

The hero must answer three questions immediately:

- What is PandaHelp?
- Who is it for?
- What should I do next?

Recommended direction for copy:

**Понятная IT-помощь без лишней возни**

> Разбираю IT-лабы и темы со студентами, помогаю с программами, Linux, Git, базами данных и другими компьютерными задачами удалённо.

Primary CTA:

**Написать в Telegram**

Secondary CTA:

**Написать в WhatsApp** or **Посмотреть услуги**

Small line:

> Сначала бесплатно посмотрю задачу и скажу, смогу ли помочь.

Do not put a huge paragraph in the hero.

### 3. Service overview

Three clear service blocks:

- PandaStudy — active;
- PandaRemote — active;
- PandaGo — temporarily unavailable.

PandaStudy and PandaRemote should visually receive the most attention.

### 4. PandaStudy detailed block

Explain:

- what it is;
- supported areas;
- how preparation works;
- why material should be sent in advance;
- example starting prices;
- CTA “Скинуть задание”.

### 5. PandaRemote detailed block

Explain:

- what remote help covers;
- what problems can be sent;
- free initial evaluation;
- remote-access consent;
- example starting prices;
- CTA “Описать проблему”.

### 6. How it works

Keep to 4 steps:

1. **Пишете** — problem + screenshots/materials + deadline.
2. **Я смотрю** — initial evaluation is free.
3. **Согласуем** — price, timing and format before work.
4. **Разбираемся** — session / remote help / result.

### 7. Pricing

Do not create a gigantic table.

Suggested compact groups:

#### Учёба

- небольшая тема — от 1 500 ₸;
- разбор лабораторной — от 2 500 ₸;
- подготовка к защите — от 2 000 ₸.

#### Удалённая помощь

- простая помощь — от 1 500 ₸;
- установка/настройка программы — от 2 000 ₸;
- настройка среды для учёбы/разработки — от 2 500–3 500 ₸.

Then:

> Точную цену скажу после бесплатной оценки задачи.

### 8. Rules / important information

Compact human-readable cards or list:

- 50% prepayment for prepared/booked work;
- Kaspi / Halyk;
- cancellation/rescheduling;
- calls 09:00–22:00;
- messages anytime;
- privacy;
- remote access only with consent.

Do not turn this section into legal terms and conditions.

### 9. About PandaHelp

Keep this short and honest.

Direction:

> PandaHelp ведёт PandaMan — студент IT-направления. Я не делаю вид, что знаю вообще всё: сначала смотрю задачу и только потом говорю, смогу ли нормально помочь.

Optional second sentence:

> Больше всего люблю разбираться в технических штуках и объяснять их нормальным языком — без ощущения, что читаешь документацию в третий раз и понимаешь ещё меньше.

Do not include unverified years of experience or expert claims.

### 10. PandaGo

Visible but muted/disabled state.

Text:

> Выездная помощь по Астане — позже. Пока работаю онлайн.

No active booking button.

### 11. FAQ

Questions should come from real customer uncertainty.

Recommended FAQ:

- Сколько это стоит?
- Можно сначала просто скинуть проблему?
- Почему лабораторную нужно присылать заранее?
- Ты делаешь лабораторные полностью за студента?
- Что если моей темы нет в списке?
- Как проходит удалённая помощь?
- Что если ты не сможешь решить проблему?
- Как проходит оплата?
- Можно отменить или перенести разбор?
- Можно позвонить ночью?
- Что происходит с моими файлами и скринами?

Keep answers short and human.

### 12. Final contact block

Strong but calm CTA.

Suggested headline:

**Не уверены, смогу ли я помочь? Просто напишите.**

Text:

> Скиньте проблему, скрин или задание. Первичная оценка бесплатная — сначала скажу, беру ли задачу, сколько примерно времени понадобится и сколько это будет стоить.

Buttons:

- Telegram;
- WhatsApp.

Secondary contact info:

- phone + call hours;
- email with note that messaging is faster.

### 13. Footer

Minimal:

- PandaHelp;
- Astana / online;
- Telegram;
- WhatsApp;
- email;
- call hours;
- copyright/current year.

---

## 22. Mobile UX

Mobile is a priority.

Requirements:

- comfortable thumb-sized buttons;
- readable pricing;
- no horizontal overflow;
- no giant hero wasting the whole first viewport;
- contact CTA visible early;
- consider a subtle sticky mobile contact action for Telegram/WhatsApp;
- avoid intrusive popups;
- avoid autoplay anything;
- avoid chat widgets that block content.

---

## 23. Desktop UX

Desktop should remain simple and dense enough to scan.

Avoid making each section full-screen just for visual drama.

Use whitespace, but do not turn a short service site into 10 screens of empty space.

---

## 24. Trust without fake social proof

At launch PandaHelp may not have reviews.

Therefore:

Do NOT invent:

- customer count;
- “98% success rate”;
- years of experience;
- fake testimonials;
- star ratings;
- logos of universities/companies not actually connected to PandaHelp;
- fake certifications.

Trust should come from:

- transparent pricing;
- free evaluation;
- clear process;
- honest scope;
- real contact information;
- simple rules;
- visible availability;
- privacy statement;
- “I will say if I cannot take the task.”

A review section may exist only after real permission-based reviews appear.

---

## 25. SEO / basic discoverability direction

The site should naturally mention relevant terms without keyword stuffing:

- IT помощь онлайн;
- компьютерная помощь Астана;
- удалённая компьютерная помощь;
- помощь студентам IT;
- разбор лабораторных по IT;
- Linux помощь;
- Git / GitHub помощь;
- PostgreSQL настройка;
- Packet Tracer / Wireshark help where relevant.

Do not repeat keywords unnaturally.

---

## 26. Technical scope for website v1

This document defines product/design requirements, not implementation instructions.

However, the first version must remain simple enough to host without paid infrastructure.

The product does NOT require in v1:

- user accounts;
- database;
- admin dashboard;
- online payment;
- appointment engine;
- live chat backend;
- customer portal;
- complex CMS;
- AI chatbot.

External contact links are enough for the first version.

---

## 27. Content hierarchy rule

Every section should prioritize in this order:

1. What problem is solved?
2. Who is it for?
3. What does it roughly cost?
4. What should the user do next?
5. What important condition should they know?

Do not make users read a brand story before learning what the service actually does.

---

## 28. Non-negotiable copy rule

Before finalizing any public text, check:

> “Would a normal 18–25-year-old person actually write this in a real service website or message?”

If the answer is no, rewrite it.

The site should not sound like it was generated from a prompt containing “modern, innovative, seamless, tailored, cutting-edge, comprehensive, efficient, reliable”.

Prefer concrete nouns and verbs over adjectives.

Example:

Bad:
> Получите профессиональную и комплексную помощь для эффективного решения ваших IT-задач.

Better:
> Скиньте задачу или ошибку. Я посмотрю, смогу ли помочь, и назову цену до начала работы.

---

## 29. Launch-state summary

### Active

- PandaStudy
- PandaRemote
- Telegram contact
- WhatsApp contact
- Phone calls 09:00–22:00
- Email as secondary contact
- Free initial evaluation
- Kaspi/Halyk payment
- 50% prepayment for prepared/reserved work
- first 5 clients: 20% launch discount

### Temporarily unavailable

- PandaGo / on-site visits

### Not offered

- advanced hardware repair;
- soldering;
- advanced data recovery;
- guaranteed AI-detection bypass;
- guaranteed grades;
- guaranteed acceptance of every task;
- 24/7 phone support.

---

## 30. Exact contact data for implementation

Brand: **PandaHelp**  
Identity: **PandaMan**

Telegram: **@Pandammann**  
WhatsApp / phone: **+7 708 219 2045**  
Email: **farhatnurzhan@gmail.com**

Call hours: **09:00–22:00, Astana time**  
Messages: **any time; response when available**

Primary CTA priority:

1. Telegram
2. WhatsApp
3. Phone
4. Email

---

## 31. Definition of a successful first version

The first public version is successful if a new visitor can answer these questions within roughly 20–30 seconds:

- What is PandaHelp?
- Can it help with my kind of problem?
- How much might it cost?
- Is the first evaluation free?
- How do I contact PandaHelp?
- What should I send in the first message?
- When can I call?

And, most importantly, the site should make the visitor comfortable enough to simply send a message instead of leaving because the service looks complicated, fake or overly formal.

