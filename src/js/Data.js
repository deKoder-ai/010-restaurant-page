'use strict'
const MenuItems = {
    thai: [
        {meal: `<strong>PAD THAI</strong> A stir-fried noodle dish that includes 
            rice noodles, eggs, tofu, and your choice of shrimp, chicken, or pork, 
            seasoned with tamarind juice, fish sauce, and palm sugar`, 
            price: `฿125`},
        {meal: `<strong>TOM YUM GUNG</strong> A spicy and sour shrimp soup 
            flavored with lemongrass, kaffir lime leaves, shallots, lime juice, 
            fish sauce, and fresh chilies`, price: `฿347`},
        {meal: `<strong>GREEN CURRY</strong> A creamy curry made with coconut milk, 
            green curry paste, and a variety of vegetables and proteins like 
            chicken, beef, or tofu`, price: `฿215`},
        {meal: `<strong>SOM TAM</strong> A salad made from shredded unripe papaya, 
            tomatoes, carrots, long beans, peanuts, garlic, chilies, palm sugar, 
            lime juice, and fish sauce`, price: `฿400`},
        {meal: `<strong>KHAO SOI</strong> Boiled egg noodles, a rich coconut curry 
            base, and is garnished with crispy egg noodles, pickled mustard greens, 
            and lime`, price: `฿75`},
        {meal: `<strong>LAAB</strong> A meat salad seasoned with fresh herbs, 
            with pork, chicken, or duck. Served with sticky rice`, price: `฿109`},
        {meal: `<strong>TOM KHA GAI</strong> A creamy coconut milk soup with chicken, 
            mushrooms, and galangal, seasoned with lemongrass, kaffir lime leaves, 
            and fish sauce`, price: `฿222`},
        {meal: `<strong>PAD SEE EW</strong> A stir-fried dish made with wide rice 
            noodles, soy sauce, meat, egg, tofu, and Chinese broccoli`, 
            price: `฿679`},
        {meal: `<strong>NO NAME CHICKEN</strong> Exactly what it sounds like`, 
            price: `฿555`},
    ],

    cocktails: [
        {cocktail: `<strong>CLASSIC</strong> Cimarron Blanco, Combier, Lime`, 
            price: `฿19`},
        {cocktail: `<strong>MEZCAL</strong> Manojo Espadin, Giffard's Triple Sec, 
            Combier, Lime`, price: `฿125`},
        {cocktail: `<strong>PALOMA</strong> Cimarron Reposada, Grapefruit 
            Cordial, Soda, Lime`, price: `฿25`},
        {cocktail: `<strong>DESERT BLOOM</strong> Por Siempre Sotol, Dolin Blanc, 
            Prickly Pear, Lime,`, price: `฿325`},
        {cocktail: `<strong>CADILLAC</strong> Don Fulano Reposado, Pierr Ferrand 
            Dry Curacao, Grand Marnier, Lime`, price: `฿25`},
        {cocktail: `<strong>IMAGINARY FRIEND</strong> Agua Del Sol Espadin, 
            Carpano Bianco, Dolin Blanc, Saler's Gentiane`, price: `฿25`},
    ],

    beer: [
        {beer: `<strong>Leo</strong> Large / Small`, price: `฿25 / ฿50`},
        {beer: `<strong>Estrella</strong> Large / Small`, price: `฿25 / ฿50`},
        {beer: `<strong>Tiger</strong> Large / Small`, price: `฿25 / ฿50`}
    ]
}

const Addresses = {
    english: [
        `<br>`,
        `5th Floor <strong><a class="link" id="find-us-hub-link">@The Hub</a></strong>`,
        `466/1-39 Phahon Yotin Road,`,
        `Ari, Phaya Thai,`,
        `BKK, 10400`,
        `<br>`,
        `Phone: (+66) 085 085 1568`,
        `Email: hideout.ari@gmail.com`,
        `Facebook: <strong><a class="link" id="find-us-fb-link">Hideout Ari</a></strong>`
    ],
    thai: [
        `<br>`,
        `ชั้น 5 <strong><a class="link" id="find-us-hub-link">@เดอะฮับ</a></strong>`,
        `466/1-39 ถนนพหลโยธิน`,
        `อารีย์ เขตพญาไท`,
        `กทม 10400`,
        `<br>`,
        `โทร. (+66) 085 085 1568`,
        `อีเมล: hideout.ari@gmail.com`,
        `เฟสบุ๊ค: <strong><a class="link" id="find-us-fb-link">Hideout Ari</a></strong>`
    ]
}

const About = {
    englishTitle: `Where the city's best-kept secret is waiting to be uncovered, 
        and the good times are always on tap`,
    thaiTitle: `ที่ซึ่งความลับอันเก็บงำไว้เป็นอย่างดีของเมืองกำลังรอการเปิดเผย และช่วงเวลาดีๆ ก็พร้อมเสมอ`,
    english: [
        `Step into the unassuming entrance, and discover a world of hidden 
            delights. At Hideout Ari, we\'ve repurposed an old [insert location] 
            to create a sophisticated oasis in the heart of the city. Think 
            exposed brick, reclaimed wood, and vintage accents – with a dash of 
            modern flair.`,
        `By day, our bar is a quiet haven for coffee and conversation. By night, 
            we transform into a lively music venue, featuring local acts that\'ll 
            keep you dancing till the lights come up. With a menu that\'s always 
            evolving, we offer everything from craft cocktails and small plates to 
            wine and beer – and always something new to try.`,
        `From our globally-inspired small plates to our expertly crafted cocktails, 
            every detail at Hideout Ari is designed to make you feel at home. 
            Join us for dinner, drinks, or just a night out with friends – and 
            experience the warm, welcoming vibe that\'s making us the city\'s 
            best-kept secret.`
    ],
    thai: [
        `ก้าวเข้าสู่ทางเข้าอันเรียบง่าย และค้นพบโลกแห่งความสุขที่ซ่อนอยู่ ที่ Hideout Ari เราได้นำ [ใส่สถานที่] เก่ามาปรับใช้ใหม่เพื่อสร้างโอเอซิสอันหรูหราใจกลางเมือง ลองนึกถึงอิฐเปลือย ไม้เก่า และของตกแต่งสไตล์วินเทจ พร้อมกลิ่นอายความทันสมัย`,
        `ในตอนกลางวัน บาร์ของเราเป็นสถานที่เงียบสงบสำหรับการดื่มกาแฟและพูดคุยกัน ในตอนกลางคืน บาร์ของเราจะเปลี่ยนเป็นสถานที่แสดงดนตรีที่มีชีวิตชีวา โดยมีการแสดงดนตรีท้องถิ่นที่จะทำให้คุณเต้นรำจนลืมหายใจไปได้เลย ด้วยเมนูที่เปลี่ยนแปลงอยู่เสมอ เรามีอาหารให้เลือกหลากหลาย ตั้งแต่ค็อกเทลฝีมือดีและอาหารจานเล็ก ไปจนถึงไวน์และเบียร์ และยังมีอาหารใหม่ๆ ให้ลองเสมอ`,
        `ตั้งแต่อาหารจานเล็กที่ได้รับแรงบันดาลใจจากทั่วโลกไปจนถึงค็อกเทลฝีมือประณีต ทุกรายละเอียดที่ Hideout Ari ออกแบบมาเพื่อให้คุณรู้สึกเหมือนอยู่บ้าน เข้าร่วมกับเราเพื่อรับประทานอาหารเย็น ดื่มเครื่องดื่ม หรือออกไปเที่ยวกลางคืนกับเพื่อนๆ และสัมผัสกับบรรยากาศอบอุ่นและเป็นกันเองที่ทำให้เราเป็นความลับที่เก็บงำไว้เป็นอย่างดีที่สุดของเมือง`
    ]
}

export { MenuItems, Addresses, About };

