import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-20 bg-stone-50 dark:bg-gray-900 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold font-serif text-brand-text-light dark:text-brand-text-dark">Tentang Alas Floris</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Cerita kami, misi, dan visi untuk dunia yang lebih hijau.</p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl font-bold font-serif text-brand-green dark:text-green-300 mb-4">Awal Mula Kami</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Alas Floris lahir dari kecintaan kami terhadap alam dan keinginan untuk membawa potongan keindahan itu ke dalam hiruk pikuk kehidupan modern. Kami percaya bahwa kehadiran tanaman bukan hanya soal estetika, tetapi juga tentang menciptakan ruang hidup yang lebih sehat, tenang, dan produktif.
                </p>
                <h3 className="text-2xl font-bold font-serif text-brand-green dark:text-green-300 mt-6 mb-2">Misi & Visi</h3>
                <p className="text-gray-700 dark:text-gray-300">
                    <b>Misi kami</b> adalah menyediakan solusi penghijauan yang ramah lingkungan, estetis, dan mudah diakses bagi semua orang. <b>Visi kami</b> adalah menjadi mitra terpercaya dalam menciptakan setiap ruangan menjadi oase yang nyaman dan menyegarkan.
                </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl h-96">
                <img src="https://media.istockphoto.com/id/157611714/id/foto/lounge-taman-teras-modern-dengan-kolam-renang-dan-sofa-luar-ruangan.webp?a=1&b=1&s=612x612&w=0&k=20&c=OKjrG4qBaum9M-QqL_f1LiuLN9vH_EI2bijh8JiLWak=" alt="Taman Alas Floris yang asri" className="w-full h-full object-cover"/>
            </div>
        </div>

        <div className="mt-24 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-brand-green dark:text-green-300 mb-6">Lebih dari Sekadar Menjual Tanaman</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <p>
                    Selain menyediakan berbagai tanaman hias untuk dibeli, Alas Floris juga menghadirkan layanan sewa tanaman untuk acara, kantor, dan ruang publik. Kami memahami bahwa tidak semua orang memiliki waktu untuk merawat tanaman secara rutin, oleh karena itu kami menyediakan solusi praktis dengan tampilan yang tetap alami dan segar.
                </p>
                <p>
                    Kami juga melayani dekorasi tanaman untuk acara seperti pernikahan, peluncuran produk, dan pameran. Tim kami akan membantu menata konsep hijau yang elegan, menciptakan suasana alami yang menenangkan dan berkesan.
                </p>
                <p className="font-semibold italic text-brand-green/90 dark:text-green-300/90">
                    Dengan kombinasi antara estetika dan kenyamanan, kami berkomitmen untuk membawa sentuhan alam ke setiap ruang dan momen istimewa Anda.
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;