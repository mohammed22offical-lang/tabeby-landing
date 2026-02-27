import type { Locale } from "./content";

export const legalContent: Record<
  Locale,
  {
    privacy: { title: string; updated: string; back: string; sections: { title: string; body: string[] }[] };
    terms: { title: string; updated: string; back: string; sections: { title: string; body: string[] }[] };
  }
> = {
  ar: {
    privacy: {
      title: "سياسة الخصوصية",
      updated: "آخر تحديث: فبراير ٢٠٢٥ · Tabeby LLC",
      back: "← العودة للرئيسية",
      sections: [
        {
          title: "١. المقدمة",
          body: [
            'Tabeby LLC ("طبيبي"، "نحن"، أو "الشركة") شركة مسجّلة في وايومنغ، الولايات المتحدة، وتشغّل منصة طبيبي والخدمات المرتبطة بها، بما في ذلك في العراق (انطلاقاً من كربلاء مع خطط للتوسع). توضّح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا والكشف عن معلوماتك وحمايتها عند استخدامك لخدماتنا. باستخدامك طبيبي، فإنك توافق على الممارسات الموضحة في هذه السياسة.',
          ],
        },
        {
          title: "٢. المعلومات التي نجمعها",
          body: [
            "قد نجمع: معلومات الحساب والملف الشخصي (الاسم، البريد الإلكتروني، رقم الهاتف)، وبيانات المواعيد والدور، ومعلومات الجهاز والاستخدام (نوع المتصفح، عنوان IP)، والمراسلات التي ترسلها إلينا.",
          ],
        },
        {
          title: "٣. كيف نستخدم معلوماتك",
          body: [
            "نستخدم المعلومات التي نجمعها لتقديم الخدمات وصيانتها وتحسينها؛ وإرسال إشعارات تتعلق بالمواعيد وحالة الدور؛ والرد على طلباتك؛ والامتثال للالتزامات القانونية. نحن لا نبيع معلوماتك الشخصية لأطراف ثالثة.",
          ],
        },
        {
          title: "٤. أمان البيانات",
          body: [
            "نطبّق إجراءات فنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول أو التعديل أو الكشف أو الإتلاف غير المصرح به.",
          ],
        },
        {
          title: "٥. حقوقك",
          body: [
            "حسب مكان إقامتك، قد يكون لديك حقوق في الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها أو تقييد معالجتها. لممارسة هذه الحقوق، تواصل معنا على support@tabeby-app.com.",
          ],
        },
        {
          title: "٦. التواصل",
          body: [
            "لأي استفسارات حول سياسة الخصوصية هذه، تواصل مع Tabeby LLC على support@tabeby-app.com أو على عنواننا المسجّل في شيريدان، وايومنغ، الولايات المتحدة.",
          ],
        },
      ],
    },
    terms: {
      title: "شروط الخدمة",
      updated: "آخر تحديث: فبراير ٢٠٢٥ · Tabeby LLC",
      back: "← العودة للرئيسية",
      sections: [
        {
          title: "١. قبول الشروط",
          body: [
            'بالوصول إلى منصة طبيبي والخدمات المرتبطة ("الخدمات") التي تشغّلها Tabeby LLC ("طبيبي"، "نحن"، أو "الشركة")—شركة مسجّلة في وايومنغ، الولايات المتحدة، تقدم خدماتها في العراق وخارجها—فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق، لا تستخدم خدماتنا.',
          ],
        },
        {
          title: "٢. وصف الخدمات",
          body: [
            "تقدم طبيبي أدوات حجز المواعيد الرقمي وإدارة الدور والمواعيد للمرضى ومقدّمي الرعاية الصحية. تطلق خدماتنا أولاً في كربلاء، العراق، مع خطط للتوسع. نحتفظ بحق تعديل أو تعليق أو إيقاف أي جزء من الخدمات في أي وقت.",
          ],
        },
        {
          title: "٣. مسؤوليات المستخدم",
          body: [
            "توافق على: تقديم معلومات دقيقة عند إنشاء حساب أو حجز مواعيد؛ استخدام الخدمات لأغراض قانونية فقط وفقاً لهذه الشروط؛ وعدم إساءة الاستخدام أو التعطيل أو محاولة الوصول غير المصرح به لأنظمتنا أو بياناتنا.",
          ],
        },
        {
          title: "٤. إخلاء المسؤولية",
          body: [
            'تقدم الخدمات "كما هي". لا تضمن طبيبي خلو المواعيد أو معلومات الدور من الأخطاء أو استمرارية الخدمات دون انقطاع. نحن لسنا مسؤولين عن جودة الرعاية الصحية التي تقدمها العيادات المستخدمة لمنصتنا.',
          ],
        },
        {
          title: "٥. تحديد المسؤولية",
          body: [
            "في أقصى حد يسمح به القانون، لا تتحمل Tabeby LLC المسؤولية عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية ناتجة عن استخدامك للخدمات.",
          ],
        },
        {
          title: "٦. التعديلات",
          body: [
            "قد نحدّث هذه الشروط من وقت لآخر. سنعلم المستخدمين بأي تغييرات جوهرية عبر الخدمات أو البريد الإلكتروني. استمرار استخدام الخدمات بعد التعديلات يُعتبر قبولاً للشروط المحدّثة.",
          ],
        },
        {
          title: "٧. التواصل",
          body: [
            "لأي استفسارات حول شروط الخدمة، تواصل مع Tabeby LLC على support@tabeby-app.com أو على عنواننا المسجّل في شيريدان، وايومنغ، الولايات المتحدة.",
          ],
        },
      ],
    },
  },
  en: {
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: February 2025 · Tabeby LLC",
      back: "← Back to Home",
      sections: [
        {
          title: "1. Introduction",
          body: [
            'Tabeby LLC ("Tabeby," "we," "us," or "our") is a company registered in Wyoming, USA, and operates the Tabeby platform and related services, including in Iraq (launching in Karbala, with plans to expand). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services. By using Tabeby, you agree to the practices described in this policy.',
          ],
        },
        {
          title: "2. Information We Collect",
          body: [
            "We may collect: account and profile information (name, email, phone number); appointment and queue-related data; device and usage information (e.g., browser type, IP address); and communications you send to us.",
          ],
        },
        {
          title: "3. How We Use Your Information",
          body: [
            "We use the information we collect to provide, maintain, and improve our services; to send you notifications related to appointments and queue status; to respond to your requests; and to comply with legal obligations. We do not sell your personal information to third parties.",
          ],
        },
        {
          title: "4. Data Security",
          body: [
            "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
          ],
        },
        {
          title: "5. Your Rights",
          body: [
            "Depending on your location, you may have rights to access, correct, delete, or restrict the processing of your personal data. To exercise these rights, contact us at support@tabeby-app.com.",
          ],
        },
        {
          title: "6. Contact",
          body: [
            "For questions about this Privacy Policy, contact Tabeby LLC at support@tabeby-app.com or at our registered address in Sheridan, Wyoming, USA.",
          ],
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      updated: "Last updated: February 2025 · Tabeby LLC",
      back: "← Back to Home",
      sections: [
        {
          title: "1. Acceptance of Terms",
          body: [
            'By accessing or using the Tabeby platform and related services ("Services") operated by Tabeby LLC ("Tabeby," "we," or "us")—a company registered in Wyoming, USA, offering services in Iraq and elsewhere—you agree to be bound by these Terms of Service. If you do not agree, do not use our Services.',
          ],
        },
        {
          title: "2. Description of Services",
          body: [
            "Tabeby provides digital clinic booking, queue management, and appointment-related tools for patients and healthcare providers. Our services are initially launching in Karbala, Iraq, with plans to expand. We reserve the right to modify, suspend, or discontinue any part of the Services at any time.",
          ],
        },
        {
          title: "3. User Responsibilities",
          body: [
            "You agree to: provide accurate information when creating an account or booking appointments; use the Services only for lawful purposes and in accordance with these Terms; and not misuse, disrupt, or attempt to gain unauthorized access to our systems or data.",
          ],
        },
        {
          title: "4. Disclaimers",
          body: [
            'The Services are provided "as is." Tabeby does not guarantee that appointments or queue information will be error-free or that the Services will be uninterrupted. We are not responsible for the quality of healthcare provided by clinics using our platform.',
          ],
        },
        {
          title: "5. Limitation of Liability",
          body: [
            "To the maximum extent permitted by law, Tabeby LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services.",
          ],
        },
        {
          title: "6. Changes",
          body: [
            "We may update these Terms from time to time. We will notify users of material changes via the Services or by email. Continued use of the Services after changes constitutes acceptance of the updated Terms.",
          ],
        },
        {
          title: "7. Contact",
          body: [
            "For questions about these Terms of Service, contact Tabeby LLC at support@tabeby-app.com or at our registered address in Sheridan, Wyoming, USA.",
          ],
        },
      ],
    },
  },
  ku: {
    privacy: {
      title: "سیاسەتی تایبەتمەندی",
      updated: "دوایین نوێکردنەوە: شوبات ٢٠٢٥ · Tabeby LLC",
      back: "← گەڕانەوە بۆ سەرەوە",
      sections: [
        {
          title: "١. پێشەکی",
          body: [
            'Tabeby LLC ("طبیبی"، "ئێمە"، یان "کۆمپانیا") کۆمپانیایەکی تۆمارکراو لە وایۆمینگ، ویلایەتە یەکگرتووەکان، و پلاتفۆرمی طبیبی و خزمەتگوزارییە پەیوەندیدارەکانی بەڕێوەدەبات، لەوانە لە عێراق (دەستپێکردن لە کەربەلا). ئەم سیاسەتی تایبەتمەندیە ڕوون دەکاتەوە چۆن زانیاریەکەت کۆدەکەینەوە، بەکاری دەهێنین، ئاشکرا دەکەین و پاراستنی چۆن دەکەین. بە بەکارهێنانی طبیبی، ڕازیت بە ئەم سیاسەتە.',
          ],
        },
        {
          title: "٢. زانیارییەکانی کۆکردنەوە",
          body: [
            "دەتوانین کۆ بکەینەوە: زانیاری هەڵە و پرۆفایل (ناو، ئیمەیڵ، ژمارەی تەلەفۆن)، داتای مووەت و ڕێزبەندی، زانیاری ئامێر و بەکارهێنان، نامەکانی ناردووت بۆمان.",
          ],
        },
        {
          title: "٣. چۆنیەتی بەکارهێنانی زانیاری",
          body: [
            "زانیارییە کۆکراوەکان بەکاردەهێنین بۆ پێشکەشکردن، پاراستن و باشکردنی خزمەتگوزاری؛ ناردنی ئاگاداری بەربەست بە مووەت و دۆخی ڕێزبەندی؛ وەڵامدانەوەی داواکارییەکان؛ ڕێکەوتن لەگەڵ یاسا. زانیاری کەسیت نافروشین بۆ ئەنجامەکان.",
          ],
        },
        {
          title: "٤. پاراستنی داتا",
          body: [
            "ڕێکخستنە تەکنیکی و ڕێکخستنەکان بەکاردەهێنین بۆ پاراستنی زانیاری کەسیت لە دەستگەیشتن یان گۆڕان یان ئاشکراکردن یان لەناوبردنی نەمجێور.",
          ],
        },
        {
          title: "٥. مافەکانت",
          body: [
            "بەپێی شوێنت، ڕەنگە مافی دەستگەیشتن، چاککردن، سڕینەوە یان سنووردارکردنی بەکارهێنانی داتاکەت هەبێت. بۆ جێبەجێکردنی ئەم مافانە، پەیوەندیمان پێوە بکە لە support@tabeby-app.com.",
          ],
        },
        {
          title: "٦. پەیوەندی",
          body: [
            "بۆ هەر پرسیارێک لەسەر ئەم سیاسەتی تایبەتمەندییە، پەیوەندی بە Tabeby LLC بکە لە support@tabeby-app.com یان لە ناونیشانی تۆمارکراومان لە شێریدان، وایۆمینگ، ویلایەتە یەکگرتووەکان.",
          ],
        },
      ],
    },
    terms: {
      title: "مەرجەکانی خزمەتگوزاری",
      updated: "دوایین نوێکردنەوە: شوبات ٢٠٢٥ · Tabeby LLC",
      back: "← گەڕانەوە بۆ سەرەوە",
      sections: [
        {
          title: "١. قبووڵکردنی مەرجەکان",
          body: [
            'بە دەستگەیشتن بە پلاتفۆرمی طبیبی و خزمەتگوزارییە پەیوەندیدارەکان ("خزمەتگوزاری") کە لەلایەن Tabeby LLC ("طبیبی"، "ئێمە") بەڕێوەدەبرێت—کۆمپانیایەکی تۆمارکراو لە وایۆمینگ—ڕازیت بە ئەم مەرجانەی خزمەتگوزاری. ئەگەر ڕاز نەبیت، خزمەتگوزاریەکانمان بەکارمەهێنە.',
          ],
        },
        {
          title: "٢. وەسفی خزمەتگوزاری",
          body: [
            "طبیبی ئامرازی حجزکردنی مووەتی دیجیتاڵ و بەڕێوەبردنی ڕێزبەندی پێشکەش دەکات بۆ نەخۆش و پێشکەشکەری تەندروستی. خزمەتگوزارییەکان یەکەم جار لە کەربەلا، عێراق دەستپێدەکەن. مافمان هەیە هەر بەشێک بگۆڕین یان وەستێنین.",
          ],
        },
        {
          title: "٣. بەرپرسیارێتییەکانی بەکارهێنەر",
          body: [
            "ڕازیت: زانیاری ڕاست بدەیت کاتێک حساب دروست دەکەیت یان مووەت حجز دەکەیت؛ خزمەتگوزاری تەنها بۆ مەبەستی یاسایی بەکاربهێنیت؛ سوودنەهێنیت یان ڕێگەنەدەیت یان هەوڵی دەستگەیشتنی نەمجێور مەدەیت.",
          ],
        },
        {
          title: "٤. ڕەتکردنەوەی بەرپرسیارێتی",
          body: [
            'خزمەتگوزاری "وەک خۆی" پێشکەش دەکرێت. طبیبی گرنتی نادات کە مووەت یان زانیاری ڕێزبەندی بێ هەڵە بێت. ئێمە بەرپرسیار نین لە کوالیتی تەندروستی کلینیکە بەکارهێنەرەکان.',
          ],
        },
        {
          title: "٥. سنووری بەرپرسیارێتی",
          body: [
            "بە زۆرترین ئاستی ڕێگەپێدراو لە یاسا، Tabeby LLC بەرپرسیار نییە لە هەر زیانێکی ناڕاستەوخۆ یان ڕێکەوت یان تایبەت لە بەکارهێنانی خزمەتگوزاریەکان.",
          ],
        },
        {
          title: "٦. گۆڕانکارییەکان",
          body: [
            "ڕەنگە ئەم مەرجانە لە کاتێک بۆ کاتێک نوێ بکەینەوە. بە گۆڕانکارییە گرنگەکان ئاگادار دەکەینەوە. بەکارهێنانی درێژخایەن دوای گۆڕانکاری ڕازبوونەوەی مەرجە نوێکراوەکانە.",
          ],
        },
        {
          title: "٧. پەیوەندی",
          body: [
            "بۆ پرسیار لەسەر مەرجەکانی خزمەتگوزاری، پەیوەندی بە Tabeby LLC بکە لە support@tabeby-app.com یان لە ناونیشانی تۆمارکراومان لە شێریدان، وایۆمینگ، ویلایەتە یەکگرتووەکان.",
          ],
        },
      ],
    },
  },
};
