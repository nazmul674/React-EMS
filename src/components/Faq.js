import React from "react";
import SidebarAdmin from "../components/admin/sidebarAdmin";
import TopBar from "./admin/TopBar";


function Faq() {
  return (
    <div>
      <TopBar />
      <div className="dashboard-1">
        <div >
          <SidebarAdmin />
        </div>
        <div className="dashboard">
          {/*starts here*/}
          <div className="card mt-5 mr-4" style={{ color: "black" }}>
            <div className="card-header" style={{fontSize : '50px'}}>ডিম আগে না মুরগি আগে?</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>
                  বহুল বিতর্কিত প্রশ্ন- ডিম আগে না মুরগি আগে? এর সঠিক উত্তর জানা
                  নেই। বিতর্কটা মূলত ডিম আর মুরগির আবির্ভাব নিয়ে। ডিম আগে নাকি
                  মুরগি আগে। আবহমান কাল থেকে উঠে এসেছে এই প্রশ্ন। এই ধাঁধার
                  সমাধান করতে গিয়ে বহু বিজ্ঞানী থেকে সমাজতত্ত্ববিদ বিস্তর হিমশিম
                  খেয়েছেন।
                </p>
                <p>
                  যুক্তি দিয়ে এই জটিল প্রশ্নের উত্তর বের করা কার্যত অসম্ভব।
                  হ্যারি পটারের সেই ডাইনি লুনা লাভগার্ডের কথা মনে আছে? যে বলেই
                  দিয়েছিল, ‘‘একটি বৃত্তের কোনও শুরুই আসলে থাকে না।’’ ফলে পক্ষে
                  বিপক্ষে বিজ্ঞানীদের এ বিষয়ে নানান মতামত পাওয়া যাচ্ছে।
                </p>
                <p>
                  ডিম আগে না মুরগি আগে নিয়ে খ্রিষ্টপূর্ব থেকে বহু দার্শনিক আর
                  গবেষকদের Apple of Discord হয়ে আছে এই কথা। এই ধরনের উভয়সংকট
                  প্রশ্নগুলোকে Casualty dilemma বলা হয়। এই টাইপের ডায়ালেমাগুলো
                  খুব মজার অবশ্য।{" "}
                </p>
                <p>
                  ১৮২৫ সালে দার্শনিকদের জীবনী নিয়ে লেখা বই Francois Fenelon - এ
                  এরিস্টটল অংশে আছে, “If there has been a first man he must have
                  been born without father or mother - which is repugnant to
                  nature. For there could not have been a first egg to give a
                  beginning to birds, or there should have been a first bird
                  which gave a beginning to eggs; for a bird comes from an
                  egg.”এটা বলে এরিস্টটল আরও কনফিউশন বাড়িয়ে দিয়েছেন। এর প্রধান
                  কারণ অবশ্য তাদের ইভল্যুশনারি বায়োলজি সম্পর্কে ধারণা ছিল না।
                  বিজ্ঞানী ল্যামার্ক এরকম কিছু ধারণা দেয়ার পরে থেকে মানুষ ধীরে
                  ধীরে কিছু ব্যাখা করা শিখল।
                </p>
                <p>
                  স্টিফেন হকিং বলতেন তিনি ডিমের পক্ষে। গবেষক রিচার্ড ডকিংস বলেন,
                  “The chicken is only an egg's way of making another egg.” এটা
                  বলেও কিছু সমাধান হল না।
                </p>
                <p>
                  ইরান ভিত্তিক একজন ধর্মীয় নেতা বলছেন, আল্লাহ্‌ সুবহানাহু তায়ালা
                  পবিত্র কোরআনের ৫১ নম্বর সূরা যারিয়াতের ৪৯ নম্বর আয়াতে বলেছেন,
                  আমি প্রত্যেক প্রাণী সৃষ্টি করেছি জোড়ায় জোড়ায়, যাতে তোমরা উপদেশ
                  গ্রহণ কর। এতে প্রমাণিত হয় আগে বীজ নয়, প্রাণীকে অর্থাৎ মুরগিকেই
                  আগে পাঠানো হয়েছে।
                </p>
                <footer className="blockquote-footer">
                  <cite title="Source Title">যুগান্তর ডেস্ক </cite>
                </footer>
              </blockquote>
            </div>
          </div>
          {/*ends here*/}
        </div>
      </div>
    </div>
  );
}

export default Faq;