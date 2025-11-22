
    const langBtn = document.getElementById("langBtn");
    const langOptions = document.getElementById("langOptions");

    // Toggle show/hide on button click
    langBtn.addEventListener("click", () => {
      langOptions.classList.toggle("show");
    });

    // Hide when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".lang-box")) {
        langOptions.classList.remove("show");
      }
    });

    // Hide after selecting a language
    langOptions.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        langOptions.classList.remove("show");
        // alert("Language Selected: " + btn.innerText); // optional feedback
      });
    });

        // Question Bank - 12 questions per section (48 total)
        const questionBank = {
            section1: [ // Script and Vocabulary (12 questions)
                {
                    questionJA: "Look at the illustration and choose the correct word.",
                    questionEN:"तलको प्रश्न पढेर सहि उत्तर छनोट गर्नुहोस |",
                    imageUrl: "set1-img/img1.png",
                    imageWidth: 600,
                    imageHeight: 300,
                    score: 5,
                    options: [
                        {ja: "いなか", correct: false},
                        {ja: "とかい", correct: true},
                        {ja: "ビル",  correct: false},
                       
                    ]
                },
                {
                    questionJA: "Look at the illustration and choose the correct word.",
                    
                    imageUrl: "set1-img/img2.png",
                    imageWidth:300,
                    imageHeight: 200,
                    score: 5,
                    options: [
                        {ja: "混む",  correct: true},
                        {ja: "車", correct: false},
                        {ja: "走る",  correct: false},
                       
                    ]
                },
                {
                    questionJA: "Look at the illustration and choose the correct word.",
                    
                    imageUrl: "set1-img/img3.png",
                    imageWidth: 300,
                    imageHeight: 230,
                    score: 5,
                    options: [
                        {ja: "すてる",  correct: false},
                        {ja: "熱い水", correct: false},
                        {ja: "そそぐ",  correct: true},
                       
                    ]
                },
                {
                    questionJA: "Look at the illustration and choose the correct word.",
                    
                    imageUrl: "set1-img/img4.png",
                    imageWidth: 270,
                    imageHeight: 200,
                    score: 5,
                    options: [
                        {ja: "勉強",  correct: false},
                        {ja: "描く", correct: false},
                        {ja: "書道",  correct: true},
                       
                    ]
                },
                {
                    questionJA: "Read the sentence and choose the word that fits in (     ) the most.",
                    
                    imageUrl: "set1-img/img5.png",
                    imageWidth: 520,
                    imageHeight: 120,
                    score: 5,
                    options: [
                        {ja: "ひろうえん",  correct: false},
                        {ja: "新築祝い", correct: false},
                        {ja: "お見舞い",  correct: true},
                       
                    ]
                },
                {
                    questionJA: "Read the sentence and choose the word that fits in (     ) the most.",
                    
                    imageUrl: "set1-img/img6.png",
                    imageWidth: 400,
                    imageHeight: 100,
                    score: 5,
                    options: [
                        {ja: "ふつ",  correct: false},
                        {ja: "ふづう", correct: false},
                        {ja: "ふつう",  correct: true},
                       
                    ]
                },
                {
                    questionJA: "Read the sentence and choose the word that fits in (     ) the most.",
                    
                    imageUrl: "set1-img/img7.png",
                    imageWidth: 310,
                    imageHeight: 210,
                    score: 5,
                    options: [
                        {ja: "そうですね",  correct: false},
                        {ja: "そんなことないです", correct: true},
                        {ja: "そうなんですか",  correct: false},
                       
                    ]
                },
                {
                    questionJA: "Read the sentence and choose the word that fits in (     ) the most.",
                    
                    imageUrl: "set1-img/img8.png",
                    imageWidth: 350,
                    imageHeight: 150,
                    score: 5,
                    options: [
                        {ja: "し",  correct: false},
                        {ja: "の", correct: true},
                        {ja: "か",  correct: false},
                       
                    ]
                },
                {
                    questionJA: "Read the sentence and choose the word that fits in (     ) the most.",
                    
                    imageUrl: "set1-img/img9.png",
                    imageWidth: 400,
                    imageHeight: 150,
                    score: 5,
                    options: [
                        {ja: "片付けなくちゃ",  correct: true},
                        {ja: "片付けるし", correct: false},
                        {ja: "片付けるでしょう",  correct: false},
                       
                    ]
                },
                {
                    questionJA: "Read the sentence and choose the word that fits in (     ) the most.",
                    
                    imageUrl: "set1-img/img10.png",
                    imageWidth: 600,
                    imageHeight: 80,
                    score: 5,
                    options: [
                        {ja: "にゅいんした",  correct: false},
                        {ja: "たいいんした", correct: false},
                        {ja: "にゅういんした",  correct: true},
                       
                    ]
                },
                {
                    questionJA: "Read the sentence and choose the word that fits in (     ) the most.",
                    
                    imageUrl: "set1-img/img11.png",
                    imageWidth: 600,
                    imageHeight: 180,
                    score: 5,
                    options: [
                        {ja: "知られます",  correct: false},
                        {ja: "見られます", correct: true},
                        {ja: "ビル行われます",  correct: false},
                       
                    ]
                },
                {
                    questionJA: "Read the sentence and choose the word that fits in (     ) the most.",
                    
                    imageUrl: "set1-img/img12.png",
                    imageWidth: 600,
                    imageHeight: 180,
                    score: 5,
                    options: [
                        {ja: "なんですか",  correct: false},
                        {ja: "どこですか", correct: false},
                        {ja: "どうですか",  correct: true},
                       
                    ]
                },
            ],

            section2: [ // Conversation and Expression (12 questions)
                {
                    questionJA: "Read the dialog and choose the phrase that fits the most.",
                    imageUrl: "set-1-conversection/img1.png",
                    score: 5,
                    imageWidth: 670,
                    imageHeight: 280,
                    options: [
                        {ja: "でも", en: "at 7 o'clock", correct: true},
                        {ja: "にも", en: "7 o'clock (object)", correct: false},
                        {ja: "かも", en: "by 7 o'clock", correct: false},
                        
                    ]
                },
                {
                    questionJA: "Read the dialog and choose the phrase that fits the most.",
                    imageUrl:"set-1-conversection/img2.png",
                    imageWidth: 400,
                    imageHeight: 250,
                    score: 5,
                    options: [
                        {ja: "読んでいます", en: "Thank you", correct: false},
                        {ja: "読んでおきます", en: "Excuse me, I'll take this", correct: false},
                        {ja: "読んでみます", en: "Goodbye", correct: true},
                        // {ja: "おはようございます", en: "Good morning", correct: false}
                    ]
                },
                {
                    questionJA: "Read the dialog and choose the phrase that fits the most.",
                    imageUrl:"set-1-conversection/img3.png",
                    score: 5,
                    imageWidth: 670,
                    imageHeight: 250,
                    options: [
                        {ja: "お幸せに", en: "to", correct: false},
                        {ja: "はい、何について", en: "object marker", correct:true },
                        {ja: "しょうちしました", en: "at/by", correct: false}
                        // {ja: "から", en: "from", correct: false}
                    ]
                },
                {
                    questionJA: "Read the dialog and choose the phrase that fits the most.",
                    imageUrl:"set-1-conversection/img4.png",
                    score: 5,
                    imageWidth: 670,
                    imageHeight: 230,
                    options: [
                        {ja: "困りますね", en: "Good job to you too", correct: false},
                        {ja: "無理なんですね", en: "Thank you for the food", correct: false},
                        {ja: "ざんねんですね", en: "Thank you for the food", correct: true}
                    ]
                },
                {
                    questionJA: "Read the dialog and choose the phrase that fits the most.",
                    imageUrl:"set-1-conversection/img5.png",
                    score: 5,
                    imageWidth: 670,
                    imageHeight: 230,
                    options: [
                        {ja: "かもしれません", en: "at", correct: true},
                        {ja: "だと思います", en: "to", correct: false},
                        {ja: "なければならない", en: "object marker", correct: false}
                        // {ja: "から", en: "from", correct: false}
                    ]
                },
                {
                    questionJA: "Read the dialog and choose the phrase that fits the most.",
                    imageUrl:"set-1-conversection/img6.png",
                    score: 5,
                    imageWidth: 670,
                    imageHeight: 230,
                    options: [
                        {ja: "わかりません", en: "at", correct:false },
                        {ja: "知りませんでした", en: "to", correct: true},
                        {ja: "ありがとうございました", en: "object marker", correct: false}
                        // {ja: "から", en: "from", correct: false}
                    ]
                },
                {
                    questionJA: "Read the dialog and choose the phrase that fits the most.",
                    imageUrl:"set-1-conversection/img7.png",
                    score: 6,
                    imageWidth: 670,
                    imageHeight: 230,
                    options: [
                        {ja: "かもしれません", en: "at", correct: true},
                        {ja: "じゃありません", en: "to", correct: false},
                        {ja: "なくなりました", en: "object marker", correct: false}
                        // {ja: "から", en: "from", correct: false}
                    ]
                },
                {
                    questionJA: "Read the dialog and choose the phrase that fits the most.",
                    imageUrl:"set-1-conversection/img8.png",
                    score: 6,
                    imageWidth: 670,
                    imageHeight: 260,
                    options: [
                        {ja: "が ほめられました", en: "at", correct: false},
                        {ja: "に ほめられました", en: "to", correct: true},
                        {ja: "で ほめられました", en: "object marker", correct: false},
                        // {ja: "から", en: "from", correct: false}
                    ]
                },
                {
                    questionJA: "Read the dialog and choose the phrase that fits the most.",
                    imageUrl:"set-1-conversection/img9.png",
                    score: 5,
                    imageWidth: 670,
                    imageHeight: 230,
                    options: [
                        {ja: "しかりました", en: "at", correct: true},
                        {ja: "しかられました", en: "to", correct: false},
                        {ja: "わらいました", en: "object marker", correct: false},
                        // {ja: "から", en: "from", correct: false}
                    ]
                },
                {
                    questionJA: "Read the dialog and choose the phrase that fits the most.",
                    imageUrl:"set-1-conversection/img10.png",
                    score: 5,
                    imageWidth: 640,
                    imageHeight: 350,
                    options: [
                        {ja: "減らすのに", en: "at", correct: true},
                       
                        {ja: "減らすとで", en: "object marker", correct: false},
                        {ja: "減らしても", en: "from", correct: false}
                    ]
                },
                {
                    questionJA: "Read the dialog and choose the phrase that fits the most.",
                    imageUrl:"set-1-conversection/img11.png",
                    score: 5,
                    imageWidth: 640,
                    imageHeight: 330,
                    options: [
                        {ja: "知りませんでした", en: "at", correct: false},
                        {ja: "もう一度お願いします", en: "to", correct: false},
                        {ja: "今度から気を付けます", en: "object marker", correct: true},
                        // {ja: "から", en: "from", correct: false}
                    ]
                },
                {
                    questionJA: "Read the dialog and choose the phrase that fits the most.",
                    imageUrl:"set-1-conversection/img12.png",
                    score: 5,
                    imageWidth: 640,
                    imageHeight: 230,
                    options: [
                        {ja: "忘れてしまいました", en: "at", correct: true},
                        {ja: "忘れてみました", en: "to", correct: false},
                        {ja: "忘れられました", en: "object marker", correct: false},
                        // {ja: "から", en: "from", correct: false}
                    ]
                }

            ],
            
            section3: [ // Listening (12 questions)
                // Qn nbr 1
                {
                    questionJA: "カトロさんは夏休みにどうしますか。",
                    // questionEN: "Listen to the audio. What time does the man go to the company?",
                    hasAudio: true,
                    audioUrl: "listening/audio/1.mp3",
                    imageUrl: "listening/image/img1.png",
                    imageWidth: 400,
                    imageHeight: 300,
                    score: 5,
                    options: [
                        {ja: "旅行に行きます。", correct: false},
                        {ja: "どこにも行きません。", correct:true },
                        {ja: " カナダに帰ります。", correct: false},
                        // {ja: "10時", en: "10 o'clock", correct: false}
                    ]
                },
                // Qn 2
                {
                    questionJA: "ミルズさんは夏休みにどうしますか。",
                    // questionEN: "What is the woman going to buy?",
                    hasAudio: false,
                    // audioUrl: "listening/audio/2.mp3",
                    // audioText: "スーパーでパンと牛乳を買います。",
                    imageUrl: "listening/image/img1.png",
                    score: 5,
                    options: [
                        {ja: "日本に旅行します。", correct: false},
                        {ja: " どこにも行きません。", correct: false},
                        {ja: " カナダの家に帰ります。", correct: true}
                    
                    ]
                },
                // Qn 3
                {
                    questionJA: "会話の中で、二人は何を買うことにしましたか。",
                    questionEN: "Listen to the audio. How is today's weather?",
                    hasAudio: true,
                    audioUrl: "listening/audio/2.mp3",
                    imageUrl: "listening/image/img2.png",
                    // audioText: "今日はとても暑いです。",
                    score: 5,
                    options: [
                        {ja: "マウス・パッド", correct: true},
                        {ja: "ノート", correct: false},
                        // {ja: "雨です", correct: false},
                        {ja: "ペン", correct: false}
                    ]
                },
                // qn 4
                {
                    questionJA: "会話の目的は何ですか。",
                    questionEN: "Where does the man eat lunch?",
                    hasAudio: false,
                    // audioUrl: "listening/audio/4.mp3",
                    // audioText: "会社の食堂で昼ごはんを食べます。",
                    imageUrl: "listening/image/img2.png",
                    score: 5,
                    options: [
                        {ja: "お土産を買う", correct: true},
                        {ja: "レストランを探す", correct: false},
                        {ja: " 旅行の計画を立てる", correct: false}
                        // {ja: "コンビニ", correct: false}
                    ]
                },
                // qn 5
                {
                    questionJA: "カナダのお土産で一番人気があるものは何ですか",
                    // questionEN: "What time does the woman go to sleep?",
                    hasAudio: true,
                    audioUrl: "listening/audio/3.mp3",
                    // audioText: "毎晩11時に寝ます。",
                    imageUrl: "listening/image/img3.png",
                    imageWidth: 350,
                    imageHeight: 300,
                    score: 5,
                    options: [
                        {ja: "チョコレート", correct: false},
                        {ja: "レープルシロップ", correct: true},
                        {ja: "スモークサーモン", correct: false}
                        // {ja: "9時", correct: false}
                    ]
                },
                // qn 6
                {
                    questionJA: "レープルシロップのほかに有名なお土産は何ですか",
                    questionEN: "Listen to the audio. What is the man's hobby?",
                    hasAudio: false,
                    // audioUrl: "listening/audio/6.mp3",
                    // audioText: "私の趣味は読書です。毎日本を読みます。",
                    imageUrl: "listening/image/img3.png",
                    imageWidth: 350,
                    imageHeight: 300,
                    score: 5,
                    options: [
                        {ja: "スモークサーモン", correct: true},
                        {ja: "クッキー", correct: false},
                        {ja: "日本茶", correct: false}
                        // {ja: "スポーツ", correct: false}
                    ]
                },
                // qn 7
                {
                    questionJA: "お客様は最初に何を勧められましたか。",
                    questionEN: "Where does the woman live?",
                    hasAudio: true,
                    audioUrl: "listening/audio/4.mp3",
                    // audioText: "私は東京に住んでいます。",
                    imageUrl: "listening/image/img4.png",
                    imageWidth: 400,
                    imageHeight: 300,

                    score: 7,
                    options: [
                        {ja: "食べ物", correct: false},
                        {ja: "お土産", correct: false},
                        // {ja: "京都", correct: false},
                        {ja: "飲み物", correct: true}
                    ]
                },
                // qn 8
                {
                    questionJA: "お客様はどの飲み物を選びましたか。",
                    questionEN: "Listen to the audio. What did the man drink?",
                    hasAudio: false,
                    // audioUrl: "listening/audio/5.mp3",
                    imageUrl: "listening/image/img4.png",
                    imageWidth: 350,
                    imageHeight: 250,
                    // audioText: "朝はいつもコーヒーを飲みます。",
                    score: 5,
                    options: [
                        {ja: "コーラ", correct: false},
                        {ja: "赤ワイン", correct: true},
                        {ja: "白ワイン", correct: false}
                        // {ja: "ジュース", correct: false}
                    ]
                },
                // qn 9
                {
                    questionJA: "ワンさんはどこの国の人ですか。",
                    // questionEN: "When did the woman come to Japan?",
                    hasAudio: true,
                    audioUrl: "listening/audio/5.mp3",
                    // audioText: "私は去年の4月に日本に来ました。",
                    imageUrl: "listening/image/img5.png",
                    score: 5,
                    options: [
                        {ja: "日本", correct: false},
                        {ja: "韓国", correct: false},
                        {ja: "中国", correct: true}
                        // {ja: "今年の3月", correct: false}
                    ]
                },
                // qn 10
                {
                    questionJA: "ワンさんは何歳ですか。",
                    questionEN: "Listen to the audio. What day of the week does the man rest?",
                    hasAudio: false,
                    // audioUrl: "listening/audio/1.mp3",
                    // audioText: "私は日曜日に休みます。",
                    imageUrl: "listening/image/img5.png",
                    score: 5,
                    options: [
                        {ja: "20歳", correct: true},
                        {ja: "19歳", correct: false},
                        {ja: "18歳", correct: false}
                        // {ja: "金曜日", correct: false}
                    ]
                },
                // qn 11
                {
                    questionJA: "お客さんは最初に何を注文しましたか。",
                    questionEN: "How old is the woman?",
                    hasAudio: true,
                    audioUrl: "listening/audio/6.mp3",
                    // audioText: "私は25歳です。",
                    imageUrl: "listening/image/img6.png",
                    imageWidth: 400,
                    imageHeight: 350,
                    score: 5,
                    options: [
                        {ja: "チーズケーキ1つとホットコーヒー1つ", correct: false},
                        // {ja: "23歳", correct: false},
                        {ja: "アイスクリーム2つとコーヒー2つ", correct: false},
                        {ja: "チーズケーキ2つとコーヒー2つ", correct: true}
                    ]
                },
                // qn 12
                {
                    questionJA: "コーヒーの注文について正しいのはどれですか。",
                    questionEN: "Listen to the audio. How many people are in the man's family?",
                    hasAudio: false,
                    // audioUrl: "listening/audio/1.mp3",
                    // audioText: "私の家族は4人です。父、母、妹と私です。",
                    imageUrl: "listening/image/img6.png",
                    imageWidth: 400,
                    imageHeight: 350,
                    score: 6,
                    options: [
                        {ja: "二人ともホットを頼んだ", correct: false},
                        {ja: "一人はホット、一人はアイスを頼んだ。", correct: true},
                        {ja: "二人ともアイスを頼んだ。", correct: false}
                        // {ja: "2人", correct: false}
                    ]
                }
            ],
            
            section4: [ // Reading (12 questions)
                // qn 1
                {
                    // questionJA: "次の文を読んで答えてください。\n「田中さんは毎朝6時に起きて、7時に朝ごはんを食べます。8時に家を出て、9時に会社に着きます。」\n田中さんは何時に家を出ますか。",
                    
                    
                    questionJA: "<b>ただしいものはどれですか。</b>\n\n\nかぜですね。くすりを出しますから、きょうから \n ３日飲んでください。あさ、ひる、ばんのごはん \n の後とねる前に飲んでください。",

                    questionEN: "Read the following text and answer.\n'Mr. Tanaka wakes up at 6 AM every morning, eats breakfast at 7 AM. He leaves home at 8 AM and arrives at the company at 9 AM.'\nWhat time does Mr. Tanaka leave home?",
                    score: 5,
                    options: [
                        {ja: "くすりは３日飲みます.", correct: false},
                        {ja: "１日３かいごはんの後で飲みます。", correct: false},
                        {ja: "くすりは１日４かい、ごはんの後とよるねる前に飲みます。", correct: true}
                        // {ja: "6時", correct: false}
                    ]
                },
                // qn 2
                {
                    questionJA: "<b>ただしいものはどれですか。</b>\n\n\nけさ、山川さんは７時におきました。あさごはんを食 \nべる前にシャワーをあびました。あさごはんを食べな \nがらテレビを見ました。あさごはんを食べたあとで、\n新聞を読みました。それから会社へ行きました。",
                    questionEN: "Read the hospital information and answer.\n'Reception hours: Mon-Fri 9:00-17:00, Sat 9:00-12:00, Closed on Sunday'\nUntil what time is reception open on Saturday?",
                    // imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
                    // imageWidth: 400,
                    // imageHeight: 300,
                    score: 5,
                    options: [
                        {ja: "あさごはんのあとでテレビを見ました。", correct: false},
                        {ja: "あさごはんをたべながら新聞を読みました。", correct: false},
                        {ja: "シャワーをあびたあとであさごはんを食べました。", correct: true}
                    ]
                },
                // qn 3
                {
                    questionJA: "<b>薬は何階で買えますか？</b>",
                    questionEN: "Read the memo.\n'Buy apples, bananas, milk, and bread at the supermarket. Buy medicine at the pharmacy.'\nHow many items should be bought at the supermarket?",
                    score: 6,
                    imageUrl:"reading-pic/img1.png",
                    imageHeight:400,
                    imageWidth:350,
                    options: [
                        {ja: "1階", correct: true},
                        {ja: "2階", correct: false},
                        {ja: "3階", correct: false}
                        // {ja: "2つ", correct: false}
                    ]
                },
                // qn 4
                {
                    questionJA: "<b>きのう買ったかさはどんなかさですか。</b>\n\n\n Ａ:-「きのうかさを買いました。」\nＢ:-「あ、そのかさですか。きれいなかさですね。高かったですか。」\nＡ:-「いいえ。きょねん買ったのは高くておもかったですが、このかさはかるくていいです。」",
                    questionEN: "Read the train announcement.\n'This train stops at Shinjuku, Shibuya, and Shinagawa in that order.'\nWhat is the next stop after Shibuya?",
                    score: 5,
                    options: [
                        {ja: "高くておもいです。", correct: false},
                        {ja: "安いですが、おもいです。", correct: false},
                        {ja: "かるくてきれいです。", correct: true}
                        // {ja: "池袋", correct: false}
                    ]
                },
                // qn 5
                {
                    questionJA: "<b>Read the price tag on the item. いくらで買えますか？</b>",
                    questionEN: "Look at the restaurant menu.\n'Ramen 800 yen, Curry 900 yen, Set meal 1200 yen'\nWhich dish is the cheapest?",
                    score: 6,
                    imageUrl:"reading-pic/img2.png",
                    imageHeight:400,
                    imageWidth:350,
                    options: [
                        {ja: "３００円", correct: false},
                        {ja: "５００円", correct: false},
                        {ja: "７００円", correct: true}
                        // {ja: "全部同じ", correct: false}
                    ]
                },
                // qn 6
                {
                    questionJA: "<b>今午前の１０時半です。メアリーさんはいつ会社に戻りますか？</b>",
                    questionEN: "Read the following text and answer.\n'Mr. Yamada plays tennis every Tuesday and Thursday. On Saturday he watches movies with friends.'\nHow many times a week does Mr. Yamada play tennis?",
                    score: 6,
                    imageUrl:"reading-pic/img3.png",
                    imageHeight:350,
                    imageWidth:350,
                    options: [
                        {ja: "12:00", correct: true},
                        {ja: "13:00", correct: false},
                        {ja: "15:00", correct: false}
                        // {ja: "4回", correct: false}
                    ]
                },
                // qn 7
                {
                    questionJA: "<b>この会話では、山川さんはこれからどうするつもりですか。</b>\n\n\n山川「あ、もう１１時。すぐ帰らなくちゃ。」\nヤン「もう帰るんですか。あしたは日曜日で、休みでしょ。」\n山川「でも電車がなくなりますから。」",
                    questionEN: "Read the library information.\n'Opening hours: Weekdays 9:00-20:00, Weekends 10:00-18:00, Closed on holidays'\nWhat time does the library open on Sunday?",
                    score: 5,
                    options: [
                        {ja: "電車で帰ります。", correct: true},
                        {ja: "まだ帰りません。", correct: false},
                        {ja: "タクシーで帰ります。", correct: false}
                        // {ja: "20時", correct: false}
                    ]
                },
                // qn 8
                {
                    questionJA: "<b>いっしょうけんめいはたらくとどうなりますか。</b>\n\n\nこのごろ少しふとってきた。きょねん買ったズボンを\nはくことができない。新しいのを買うためにはお金が\nひつようだ。でもお金のためにいっしょうけんめいは\nたらけば、つかれてやせるだろう。するときょねんの\nズボンをはくことができる。新しいのを買うひつよう\nはなくなる。",
                    questionEN: "Read the following text and answer.\n'Mr. Sato goes to work by car. It takes 30 minutes from home to the company.'\nHow does Mr. Sato go to work?",
                    score: 7,
                    options: [
                        {ja: "つかれてもやせない。", correct: false},
                        {ja: "もっとお金がひつようになる。", correct: false},
                        {ja: "新しいズボンはいらなくなる。", correct: true}
                        // {ja: "自転車", correct: false}
                    ]
                },
                // qn 9
                {
                    questionJA: "<b>この人は、何ページ読みましたか。</b>\n\n\n きのう、本をかって、よる３時間ぐらい読みました。\n２５０ページの本ですが、まだ１００ページぐらいあります。",
                    questionEN: "Read the store sign.\n'Business hours: 11 AM - 9 PM, Regular holiday: Monday'\nWhen is this store closed?",
                    score: 5,
                    options: [
                        {ja: "５０ページぐらい", correct: false},
                        {ja: "１５０ページぐらい", correct: true},
                        {ja: "２００ページぐらい", correct: false}
                        // {ja: "火曜日", correct: false}
                    ]
                },
                // qn 10
                {
                    questionJA: "<b>大そうじは、いつありますか？</b>",
                    questionEN: "Read the following text and answer.\n'It is raining today. Let's take an umbrella when we go out.'\nHow is today's weather?",
                    score: 5,
                    imageUrl:"reading-pic/img4.png",
                    imageHeight:500,
                    imageWidth:300,
                    options: [
                        {ja: "３月３日", correct: false},
                        {ja: "３月８日", correct: true},
                        {ja: "３月９日", correct: false}
                        // {ja: "雪", correct: false}
                    ]
                },
                // qn 11
                {
                    questionJA: "<b>まっているのはだれですか。</b>\n\n\n伝言板\n月日９月１６日\n時間１８：００\n伝言かとうさんとすずきさんへ\nさきに行って、きっさてんでまっています。\nヤンより\n",
                    questionEN: "Read the apartment information.\n'Rent: 80,000 yen per month, Deposit: 2 months' worth, Key money: 1 month's worth'\nHow much is the deposit?",
                    score: 5,
                    options: [
                        {ja: "すずきさんです。", correct: false},
                        {ja: "すずきさんとかとうさんです。", correct: false},
                        {ja: "ヤンさんです。", correct: true}
                        // {ja: "32万円", correct: false}
                    ]
                },
                // qn 12
                {
                    questionJA: "<b>このお知らせから、公園についてわかることは何ですか。</b>\n\n\n 公園の入り口に、このお知らせがあります。\n公園で遊ぶときの注意:\n\n 公園が開いている時間は、午前６時から午後９時です。これ以外の時間は入れません。\n 自転車やオートバイは、公園の入り口にとめてください。中に入れてはいけません。\n 公園の中で、次のことをしてはいけません。\n ボールを使って遊ぶこと\n たばこを吸うこと",
                    questionEN: "Read the following text and answer.\n'I drink coffee every morning. But at night I drink tea.'\nWhat does this person drink at night?",
                    score: 5,
                    options: [
                        {ja: "午後１０時に公園に入ってもいいです。", correct: false},
                        {ja: "サッカーの練習をしてはいけません。", correct: true},
                        {ja: "たばこを吸ってもいいです。", correct: false}
                        // {ja: "ジュース", correct: false}
                    ]
                }
            ]
        };

        // Section information
        const sectionInfo = [
            {title: "Script & Vocabulary", subtitle: "Questions 1-12"},
            {title: "Conversation & Expression", subtitle: "Questions 1-12"},
            {title: "Listening Comprehension", subtitle: "Questions 1-12"},
            {title: "Reading Comprehension", subtitle: "Questions 1-12"}
        ];

        // Question instructions for each section in different languages
        const questionInstructions = {
            section1: {
                en: "तलको प्रश्न पढेर सहि उत्तर छनोट गर्नुहोस्",
                ja: "Read the following question and choose the correct instruction."
            },
            section2: {
                en: "तलको संवाद पढेर सबैभन्दा उपयुक्त वाक्यांश छान्नुहोस्",
                ja: "Read the dialog and choose the phrase that fits the most."
            },
            section3: {
                en: "अडियो सुनेर प्रश्नको सही उत्तर दिनुहोस्",
                ja: "Listen to the conversation and choose the correct answer."
            },
            section4: {
                en: "पाठ पढेर प्रश्नको उत्तर दिनुहोस्",
                ja: "Read the following passage and answer the question."
            }
        };

        // Generate full 48 questions (12 per section)
        function generateFullQuestionSet() {
            const fullQuestions = [];
            
            Object.keys(questionBank).forEach((section, sectionIndex) => {
                questionBank[section].forEach((question, questionIndex) => {
                    const questionCopy = { ...question };
                    questionCopy.section = sectionIndex + 1;
                    questionCopy.sectionName = ['Script and Vocabulary', 'Conversation and Expression', 'Listening Comprehension', 'Reading Comprehension'][sectionIndex];
                    fullQuestions.push(questionCopy);
                });
            });
            
            return fullQuestions;
        }

        // Global variables
        let questions = generateFullQuestionSet();
        let currentQuestion = 0;
        let userAnswers = new Array(48).fill(null);
        let flaggedQuestions = new Set();
        let timeLeft = 3600; // 60 minutes (1 hour)
        let currentLang = 'ja';
        let timerInterval;
        let audioPlayCount = {};
        let isAudioPlaying = false;
        let currentAudioElement = null;

        // Initialize
        function initTest() {
            createQuestionNavigation();
            loadQuestion(0);
            startTimer();
            updateNavigationBar(0);
        }

        function createQuestionNavigation() {
            // Only show current section's questions
            updateQuestionNavigation();
        }

        function updateQuestionNavigation() {
            const currentSectionIndex = Math.floor(currentQuestion / 12);
            const column = document.getElementById('currentSectionColumn');
            const header = document.getElementById('currentSectionHeader');
            
            // Update header
            header.textContent = `Section ${currentSectionIndex + 1}`;
            
            // Clear and populate current section questions
            column.innerHTML = '';
            
            for(let i = 0; i < 12; i++) {
                const questionNum = (currentSectionIndex * 12) + i;
                const btn = document.createElement('div');
                btn.className = 'question-num';
                btn.textContent = i + 1; // Section specific numbering (1-12)
                btn.onclick = () => loadQuestion(questionNum);
                column.appendChild(btn);
            }
            
            updateNavigationHighlight();
        }

        function updateNavigationBar(questionIndex) {
            const sectionIndex = Math.floor(questionIndex / 12);
            document.getElementById('navSectionTitle').textContent = sectionInfo[sectionIndex].title;
            document.getElementById('navSectionSubtitle').textContent = sectionInfo[sectionIndex].subtitle;
        }

        function loadQuestion(index) {
            // Stop any playing audio when changing questions
            stopAudio();
            
            // Check if we're changing sections
            const newSectionIndex = Math.floor(index / 12);
            const currentSectionIndex = Math.floor(currentQuestion / 12);
            
            currentQuestion = index;
            const question = questions[index];
            const sectionQuestionNumber = (index % 12) + 1; // Calculate section-specific question number
            
            // Update header with section-specific question number
            document.getElementById('currentNum').textContent = sectionQuestionNumber;
            document.getElementById('questionHeaderNum').textContent = sectionQuestionNumber;
            document.getElementById('currentSection').textContent = question.sectionName;
            
            // Update question instruction based on current language and section
            updateQuestionInstruction(newSectionIndex);
            
            // Update navigation bar
            updateNavigationBar(index);
            
            // If section changed, update question navigation
            if(newSectionIndex !== currentSectionIndex) {
                updateQuestionNavigation();
            } else {
                // Update navigation highlighting only
                updateNavigationHighlight();
            }
            
            // Load question text with line break support
            if (question.questionJA) {
                document.getElementById('questionJA').innerHTML = question.questionJA.replace(/\n/g, '<br>');
            }
            if (question.questionEN) {
                document.getElementById('questionEN').innerHTML = question.questionEN.replace(/\n/g, '<br>');
            }
            
            // Show/hide and load question image
            const questionImageDiv = document.getElementById('questionImage');
            const questionImg = document.getElementById('questionImg');
            if(question.imageUrl) {
                questionImg.src = question.imageUrl;
                questionImg.style.width = question.imageWidth ? question.imageWidth + 'px' : 'auto';
                questionImg.style.height = question.imageHeight ? question.imageHeight + 'px' : 'auto';
                questionImageDiv.style.display = 'flex';
            } else {
                questionImageDiv.style.display = 'none';
            }
            
            // Show/hide audio section
            const audioSection = document.getElementById('audioSection');
            if(question.hasAudio) {
                audioSection.style.display = 'block';
                if(!audioPlayCount[index]) {
                    audioPlayCount[index] = 0;
                }
                
                // Setup audio element
                const audioElement = document.getElementById('audioElement');
                if(question.audioUrl) {
                    audioElement.src = question.audioUrl;
                }
                
                updateAudioButtons(index);
            } else {
                audioSection.style.display = 'none';
            }
            
            // Load options
            loadOptions(question.options);
            
            // Update buttons
            updateControlButtons();
            
            // Set language display
            setLanguage(currentLang);
        }

        function updateQuestionInstruction(sectionIndex) {
            const instructionElement = document.getElementById('questionInstruction');
            const sectionKey = `section${sectionIndex + 1}`;
            
            if (currentLang === 'en') {
                instructionElement.textContent = questionInstructions[sectionKey].en;
            } else {
                instructionElement.textContent = questionInstructions[sectionKey].ja;
            }
        }

        function loadOptions(options) {
            const container = document.getElementById('optionsContainer');
            container.innerHTML = '';
            
            options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                if(userAnswers[currentQuestion] === index) {
                    optionDiv.classList.add('selected');
                }
                
                optionDiv.innerHTML = `
                    <div class="option-radio"></div>
                    <div class="option-text">
                        <div class="option-jp">${option.ja}</div>
                    </div>
                `;
                
                optionDiv.onclick = () => selectAnswer(index);
                container.appendChild(optionDiv);
            });
        }

        function selectAnswer(answerIndex) {
            // Don't allow selection during audio playing
            if(isAudioPlaying) {
                return;
            }
            
            // Clear previous selection
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            
            // Select new answer
            document.querySelectorAll('.option')[answerIndex].classList.add('selected');
            
            // Store answer
            userAnswers[currentQuestion] = answerIndex;
            
            // Update navigation
            updateNavigationHighlight();
        }

        function updateNavigationHighlight() {
            const currentSectionIndex = Math.floor(currentQuestion / 12);
            const sectionStartIndex = currentSectionIndex * 12;
            
            document.querySelectorAll('.question-num').forEach((btn, index) => {
                const questionIndex = sectionStartIndex + index;
                btn.classList.remove('current', 'answered', 'flagged');
                
                if(questionIndex === currentQuestion) {
                    btn.classList.add('current');
                    btn.style.position = 'relative';
                    btn.innerHTML = `${index + 1}<span style="position: absolute; right: -20px; top: 50%; transform: translateY(-50%); color: #3d7b1e; font-size: 16px;">▶</span>`;
                } else {
                    btn.textContent = index + 1;
                    btn.style.position = '';
                    if(userAnswers[questionIndex] !== null) {
                        btn.classList.add('answered');
                    }
                }
                
                if(flaggedQuestions.has(questionIndex)) {
                    btn.classList.add('flagged');
                }
            });
        }

        function setLanguage(lang) {
            currentLang = lang;
            const langBtns = document.querySelectorAll('.lang-btn');
            
            langBtns.forEach(btn => btn.classList.remove('active'));
            
            if(lang === 'ja') {
                langBtns[0].classList.add('active');
            } else {
                langBtns[1].classList.add('active');
            }
            
            // Only update the question instruction
            const currentSectionIndex = Math.floor(currentQuestion / 12);
            updateQuestionInstruction(currentSectionIndex);
        }

        function playAudio() {
            const question = questions[currentQuestion];
            const audioElement = document.getElementById('audioElement');
            
            if(question.hasAudio && audioPlayCount[currentQuestion] < 2 && !isAudioPlaying) {
                audioPlayCount[currentQuestion]++;
                isAudioPlaying = true;
                currentAudioElement = audioElement;
                
                // Disable interface during audio
                document.getElementById('contentArea').classList.add('audio-playing');
                
                // Update buttons to show playing state
                updateAudioButtons(currentQuestion);
                
                // Play the audio
                audioElement.currentTime = 0;
                audioElement.play().then(() => {
                    // Audio started playing successfully
                }).catch((error) => {
                    console.error('Audio play failed:', error);
                    // Fallback: show text notification for demo
                    showAudioNotification(question.audioText || "Audio playing...");
                    
                    // Simulate audio duration (3 seconds) for demo
                    setTimeout(() => {
                        handleAudioEnd();
                    }, 3000);
                });
                
                // Handle when audio ends
                audioElement.onended = handleAudioEnd;
                audioElement.onerror = () => {
                    console.error('Audio error');
                    // Fallback: show text notification
                    showAudioNotification(question.audioText || "Audio playing...");
                    
                    // Simulate audio duration for demo
                    setTimeout(() => {
                        handleAudioEnd();
                    }, 3000);
                };
            }
        }
        
        function handleAudioEnd() {
            isAudioPlaying = false;
            currentAudioElement = null;
            document.getElementById('contentArea').classList.remove('audio-playing');
            updateAudioButtons(currentQuestion);
        }
        
        function stopAudio() {
            if(currentAudioElement && isAudioPlaying) {
                currentAudioElement.pause();
                currentAudioElement.currentTime = 0;
                handleAudioEnd();
            }
        }

        function replayAudio() {
            playAudio();
        }

        function showAudioNotification(audioText) {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(44, 90, 160, 0.95);
                color: white;
                padding: 20px 30px;
                border-radius: 8px;
                z-index: 1000;
                font-size: 16px;
                font-weight: bold;
                text-align: center;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            `;
            
            notification.innerHTML = `
                <div>🎧 Audio Playing...</div>
                <div style="font-size: 14px; margin-top: 10px; font-weight: normal;">
                    "${audioText}"
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                if(notification.parentElement) {
                    notification.remove();
                }
            }, 3000);
        }

        function updateAudioButtons(questionIndex) {
            const playBtn = document.getElementById('playBtn');
            const replayBtn = document.getElementById('replayBtn');
            const playCount = audioPlayCount[questionIndex] || 0;
            
            if(isAudioPlaying) {
                playBtn.disabled = true;
                replayBtn.disabled = true;
                playBtn.textContent = '🔊 Playing...';
                replayBtn.textContent = '🔊 Playing...';
            } else {
                playBtn.disabled = playCount >= 2;
                replayBtn.disabled = playCount === 0 || playCount >= 2;
                
                if(playCount === 0) {
                    playBtn.textContent = '▶ Play';
                } else {
                    playBtn.textContent = `▶ Play (${2 - playCount} left)`;
                }
                replayBtn.textContent = `🔁 Replay (${Math.max(0, 2 - playCount)} left)`;
            }
        }

        function nextQuestion() {
            // Don't allow navigation during audio
            if(isAudioPlaying) {
                showWarningPopup('Please wait for audio to finish');
                return;
            }
            
            if(currentQuestion < 47) {
                // For listening section, check if audio was played
                const question = questions[currentQuestion];
                if(question.hasAudio && !audioPlayCount[currentQuestion]) {
                    showWarningPopup('Please listen to the audio first');
                    return;
                }
                
                const nextIndex = currentQuestion + 1;
                const nextSectionIndex = Math.floor(nextIndex / 12);
                const currentSectionIndex = Math.floor(currentQuestion / 12);
                
                if(nextSectionIndex !== currentSectionIndex) {
                    showSectionChangeConfirmation(nextIndex);
                } else {
                    loadQuestion(nextIndex);
                }
            }
        }

        function previousQuestion() {
            // Don't allow navigation during audio
            if(isAudioPlaying) {
                showWarningPopup('Please wait for audio to finish');
                return;
            }
            
            if(currentQuestion > 0) {
                const prevIndex = currentQuestion - 1;
                const prevSectionIndex = Math.floor(prevIndex / 12);
                const currentSectionIndex = Math.floor(currentQuestion / 12);
                
                if(prevSectionIndex !== currentSectionIndex) {
                    showSectionChangeConfirmation(prevIndex);
                } else {
                    loadQuestion(prevIndex);
                }
            }
        }

        function showSectionChangeConfirmation(targetQuestionIndex) {
            const targetSection = Math.floor(targetQuestionIndex / 12);
            const sectionName = sectionInfo[targetSection].title;
            
            const popup = document.createElement('div');
            popup.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.7);
                z-index: 1500;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
            
            popup.innerHTML = `
                <div style="
                    background: white;
                    padding: 0px 0px 20px 0px;
                    border-top-left-radius:5px ;
                    border-top-right-radius:5px ;
                    text-align: center;
                    max-width: 450px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                ">
                    <div style="background-color:black; padding:5px 0px 5px 5px;  color: white; font-size: 20px; font-weight: bold; margin-bottom: 20px;">
                        Confirm Finish Section
                    </div>
                    <div style="font-size: 16px; margin-bottom: 25px; line-height: 1.5; padding:6px; text-align:center;">
                       If you select <b>finish section</b>, you will not be <br> able to return to the section.<br>
                    </div>
                    <div style="background: #f0f8ff; padding: 15px; border-radius: 6px; margin-bottom: 25px; font-size: 14px; color: #555;">
                        ⚠ Are you sure you would like to <b>finish this section?</b>
                    </div>
                    <div style="margin-buttom:10px;">
                        <button onclick="loadQuestion(${targetQuestionIndex}); this.parentElement.parentElement.parentElement.remove();" style="
                            background: green;
                           width:80%;
                           margin-buttom:5px;
                           margin-left:2.5em;
                            margin-top:0.6em;
                            display: block;
                            color: white;
                            border: none;
                            padding:10px;
                            border-radius: 4px;
                            font-size: 14px;
                            font-weight: bold;
                            cursor: pointer;
                        ">Yes, I would like to finish this section</button>
                        
                        <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
                            display: block;
                            width:80%;
                            margin-left:2.5em;
                            background: green;
                            color: white;
                            border: none;
                            padding: 12px 25px;
                            border-radius: 4px;
                            margin-buttom:20px;
                            margin-top:10px;
                            font-size: 14px;
                            cursor: pointer;
                        ">No, I would like to return to this section </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(popup);
        }

        function flagQuestion() {
            // Don't allow flagging during audio
            if(isAudioPlaying) {
                return;
            }
            
            if(flaggedQuestions.has(currentQuestion)) {
                flaggedQuestions.delete(currentQuestion);
                document.getElementById('flagBtn').textContent = ' Flag';
                document.getElementById('flagBtn').style.backgroundColor = '#ff8c00';
            } else {
                flaggedQuestions.add(currentQuestion);
                document.getElementById('flagBtn').textContent = ' Unflag';
                document.getElementById('flagBtn').style.backgroundColor = ' #f0a83aff';
            }
            updateNavigationHighlight();
        }

        function updateControlButtons() {
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const flagBtn = document.getElementById('flagBtn');
            
            prevBtn.disabled = currentQuestion === 0 || isAudioPlaying;
            nextBtn.disabled = currentQuestion === 47 || isAudioPlaying;
            
            // Update flag button
            if (flaggedQuestions.has(currentQuestion)) {
                flagBtn.innerHTML = '<i class="fa-solid fa-flag"></i> Unflag';
                flagBtn.style.backgroundColor = ' #f0a83aff';
            } else {
                flagBtn.innerHTML = '<i class="fa-solid fa-flag"></i> Flag';
                flagBtn.style.backgroundColor = '#347c13';
            }
        }

        function startTimer() {
            timerInterval = setInterval(() => {
                timeLeft--;
                updateTimeDisplay();
                
                if(timeLeft <= 0) {
                    clearInterval(timerInterval);
                    showTimeUpPopup();
                }
            }, 1000);
        }

        function updateTimeDisplay() {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            
            const display = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            document.getElementById('timeDisplay').textContent = display;
            
            // Warning colors
            if(timeLeft <= 300) { // Last 5 minutes
                document.getElementById('timeDisplay').style.backgroundColor = ' #f0a83aff';
            } else if(timeLeft <= 600) { // Last 10 minutes
                document.getElementById('timeDisplay').style.backgroundColor = '#ff8c00';
            }
        }

        function showTimeUpPopup() {
            const popup = document.createElement('div');
            popup.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                z-index: 2000;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
            
            popup.innerHTML = `
                <div style="
                    background: white;
                    padding: 50px;
                    border-radius: 10px;
                    text-align: center;
                    border: 4px solid #dc3545;
                    max-width: 500px;
                ">
                    <div style="color: #dc3545; font-size: 24px; font-weight: bold; margin-bottom: 20px;">
                        ⏰ TIME UP!
                    </div>
                    <div style="font-size: 18px; margin-bottom: 30px; line-height: 1.5;">
                        The test time has expired.<br>
                        Your answers will be automatically submitted.
                    </div>
                    <button onclick="submitTest(); this.parentElement.parentElement.remove();" style="
                        background: #dc3545;
                        color: white;
                        border: none;
                        padding: 15px 30px;
                        border-radius: 6px;
                        font-size: 16px;
                        font-weight: bold;
                        cursor: pointer;
                    ">Submit Test</button>
                </div>
            `;
            
            document.body.appendChild(popup);
        }

        function submitTest() {
            showSubmitConfirmation();
        }

        function showSubmitConfirmation() {
            const unanswered = userAnswers.filter(answer => answer === null).length;
            
            // Calculate current score for display
            let currentScore = 0;
            let maxScore = 0;
            
            questions.forEach((question, index) => {
                const questionScore = question.score || 1;
                maxScore += questionScore;
                
                const userAnswer = userAnswers[index];
                if(userAnswer !== null && question.options[userAnswer].correct) {
                    currentScore += questionScore;
                }
            });
            
            const popup = document.createElement('div');
            popup.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.7);
                z-index: 1500;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
            
            popup.innerHTML = `
                <div style="
                    background: white;
                    padding-bottom:20px ;
                    border-radius: 8px;
                    text-align: center;
                    max-width: 450px;
                ">
                    <div style="color: white; background-color:black; font-size: 20px; font-weight: bold; padding:10px;">
                        Confirm Finish
                    </div>
                    <div style="font-size: 16px; margin-bottom: 30px; margin-top:20px; line-height: 1.5; padding:15px;">
                    <b>If you select Submit Test, your answers will be submitted and you will not be to return to the exam.</b> 
                    </div>
                    
                    <div style="display: flex; gap: 15px; justify-content: center; margin-buttom:20px;">
                        <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
                            background: #347c13;
                            color: white;
                            border: none;
                            padding: 12px 25px;
                            border-radius: 4px;
                            font-size: 16px;
                            font-weight:bold;
                            cursor: pointer;
                        "><i class="fa-solid fa-xmark" style="font-size:20px; color:orange;"></i>  Cancel</button>
                        <button onclick="finalSubmit(); this.parentElement.parentElement.parentElement.remove();" style="
                            background: #347c13;
                            color: white;
                            border: none;
                            padding: 12px 25px;
                            border-radius: 4px;
                            font-size: 15px;
                            font-weight: bold;
                            cursor: pointer;
                        "><i class="fa-solid fa-check" style="font-size:20px; color:yellow;"></i> Submit Test</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(popup);
        }

        function finalSubmit() {
            clearInterval(timerInterval);
            
            // Stop any playing audio
            stopAudio();
            
            // Calculate scores with individual question scores
            const scores = [0, 0, 0, 0]; // Section scores
            let totalScore = 0;
            let maxPossibleScore = 0;
            
            questions.forEach((question, index) => {
                const questionScore = question.score || 1; // Default 1 point if no score specified
                maxPossibleScore += questionScore;
                
                const userAnswer = userAnswers[index];
                if(userAnswer !== null && question.options[userAnswer].correct) {
                    scores[question.section - 1] += questionScore;
                    totalScore += questionScore;
                }
            });
            
            // Calculate percentage based on total possible score
            const percentage = Math.round((totalScore / maxPossibleScore) * 100);
            
            // Display final results
            showFinalResults(totalScore, scores, maxPossibleScore, percentage);
        }

        function showFinalResults(totalScore, sectionScores, maxScore, percentage) {
            const passed = percentage >= 80;
            
            // Create URL parameters for the result pages
            const urlParams = new URLSearchParams();
            urlParams.append('totalScore', totalScore);
            urlParams.append('maxScore', maxScore);
            urlParams.append('percentage', percentage);
            urlParams.append('s1', sectionScores[0]);
            urlParams.append('s2', sectionScores[1]);
            urlParams.append('s3', sectionScores[2]);
            urlParams.append('s4', sectionScores[3]);
            
            // Redirect to appropriate result page
            if(passed) {
                window.location.href = `pass.html?${urlParams.toString()}`;
            } else {
                window.location.href = `fail.html?${urlParams.toString()}`;
            }
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if(e.ctrlKey || e.altKey || isAudioPlaying) return;
            
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    previousQuestion();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    nextQuestion();
                    break;
                case '1':
                case '2':
                case '3':
                case '4':
                    e.preventDefault();
                    const optionIndex = parseInt(e.key) - 1;
                    if(optionIndex < 4) {
                        selectAnswer(optionIndex);
                    }
                    break;
                case 'f':
                case 'F':
                    e.preventDefault();
                    flagQuestion();
                    break;
                case ' ': // Space bar to play/pause audio
                    if(questions[currentQuestion].hasAudio) {
                        e.preventDefault();
                        playAudio();
                    }
                    break;
            }
        });

        // Prevent right-click and other shortcuts
        document.addEventListener('selectstart', e => e.preventDefault());
        document.addEventListener('dragstart', e => e.preventDefault());

        // Disable F5, Ctrl+R, etc.
        document.addEventListener('keydown', function(e) {
            if(e.key === 'F5' || 
               (e.ctrlKey && e.key === 'r') || 
               (e.ctrlKey && e.key === 'R') ||
               (e.ctrlKey && e.shiftKey && e.key === 'I') ||
               (e.key === 'F12')) {
                e.preventDefault();
                showWarningPopup('Function disabled during test');
            }
        });

        function showWarningPopup(message) {
            const popup = document.createElement('div');
            popup.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #ff4444;
                color: white;
                padding: 15px 20px;
                border-radius: 6px;
                z-index: 2000;
                font-weight: bold;
                box-shadow: 0 4px 15px rgba(255,68,68,0.3);
            `;
            popup.textContent = `⚠ ${message}`;
            document.body.appendChild(popup);
            
            setTimeout(() => popup.remove(), 3000);
        }

        // Window visibility warning
        document.addEventListener('visibilitychange', function() {
            if(document.hidden) {
                showWarningPopup('Test window lost focus - Please return to test');
            }
        });

        // Initialize the test when page loads
        window.onload = initTest;    
