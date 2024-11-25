import React, { useState } from "react";
import "./Blog.css"; // CSS dosyasını import ediyoruz.
import image1 from "../images/blog1.jpg";
import image2 from "../images/blog2.jpg";
import image3 from "../images/blog3.jpg";
import extraImage1 from "../images/extra1.jpg";
import extraImage2 from "../images/extra2.jpg";

const blogPosts = [
  {
    titleTR: "Neden Kep Travel İle Ev Kiralamalısınız?",
    titleEN: "Why Should You Rent a House with Kep Travel?",
    descriptionTR: "Ev kiralama ile tatilinizde konforu keşfedin.",
    descriptionEN:
      "Discover the comfort of renting a house during your vacation.",
    image: image1,
    contentTR: (
      <div style={{ maxWidth: "900px", margin: "20px auto" }}>
        <h2>Alanya Kiralık Daire: Konforlu, Kolay ve Güvenli Tatil Fırsatı</h2>
        <img
          src={extraImage1}
          alt="Konforlu Daire"
          className="content-image"
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "auto",
            margin: "0 auto",
          }}
        />
        <p>
          Alanya, her yıl binlerce turistin tercih ettiği, eşsiz plajları ve
          tarihi zenginlikleriyle ünlü bir tatil beldesi. Eğer siz de Alanya’da
          rahat bir konaklama arayışındaysanız, sunduğumuz kiralık daireler tam
          size göre! Hem turistler hem de ev sahipleri için mükemmel bir çözüm
          sunuyoruz.
        </p>
        <h3>Kısa ve Uzun Dönem Kiralama Seçenekleri</h3>
        <p>
          Alanya’daki dairelerimiz, tatilciler için kısa dönem kiralama
          kolaylığı sağlarken, aynı zamanda uzun dönem kiralamak isteyenler için
          de ideal bir seçenek sunuyor. Günlük, haftalık veya aylık kiralama
          seçenekleri ile tatilinizin süresine uygun en uygun fiyatlarla
          konforlu bir konaklama imkanı bulabilirsiniz. İster birkaç günlüğüne
          tatil yapmak isteyin, ister uzun süreli bir ev arayışında olun, biz
          size kolayca ulaşabileceğiniz kaliteli daireler sunuyoruz.
        </p>
        <h3>Plaja ve Turistik Alanlara Yakın Konfor</h3>
        <img
          src={extraImage2}
          alt="Plaj Yakınında Daire"
          className="content-image"
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "auto",
            margin: "0 auto",
          }}
        />
        <p>
          Alanya’nın en gözde plajlarına yalnızca 500 metre mesafede bulunan
          dairelerimiz, plaj keyfini bir adım uzağınıza getiriyor. Ayrıca,
          bölgedeki başlıca turistik yerlere yürüyerek ulaşabileceğiniz bir
          konumda yer alıyoruz. Bu sayede tatiliniz boyunca Alanya’nın en
          popüler gezilecek yerlerine kolayca erişebilirsiniz. Restoranlar,
          alışveriş caddeleri ve eğlence mekanları da çevrenizdeki en önemli
          cazibe merkezlerinden sadece birkaç adım uzaklıkta.
        </p>
        <h3>Kaliteli Hizmet Anlayışı</h3>
        <p>
          Konaklamanızı unutulmaz kılmak için sunduğumuz kaliteli hizmetle her
          detayda mükemmelliği hedefliyoruz. Temizlikten güvenliğe, konforlu
          mobilyalardan modern olanaklara kadar her şey özenle tasarlanmış.
          Tatiliniz boyunca rahatça vakit geçirebilmeniz için tüm imkanlar
          düşünülmüş durumda.
        </p>
        <h3>Ev Sahipleri İçin Kısa Dönem Kiralama Kolaylığı</h3>
        <p>
          Ev sahipleri için de kısa dönem kiralama fırsatları sunuyoruz.
          Dairelerinizi kiraya vermek istiyorsanız, pratik ve güvenilir bir
          çözümle yanınızdayız. Hem kiralık dairenizden gelir elde edebilir, hem
          de profesyonel hizmet anlayışımızla evinizin yönetimi konusunda hiçbir
          endişeniz kalmaz.
        </p>
        <h2>Alanya’da Konforlu Bir Tatil İçin Bizi Tercih Edin</h2>
        <p>
          Eğer Alanya’da konforlu, pratik ve kaliteli bir konaklama
          arayışındaysanız, bizimle iletişime geçebilirsiniz. Farklı kiralama
          seçeneklerimiz ve avantajlı konumumuz ile tatilinizi keyifli hale
          getirecek daireler sizi bekliyor!
        </p>
      </div>
    ),
    contentEN: (
      <div style={{ maxWidth: "900px", margin: "20px auto" }}>
        <h2>
          Alanya Rental Apartments: Comfortable, Easy, and Safe Vacation Option
        </h2>
        <img
          src={extraImage1}
          alt="Comfortable Apartment"
          className="content-image"
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "auto",
            margin: "0 auto",
          }}
        />
        <p>
          Alanya is a popular vacation destination known for its unique beaches
          and historical richness, attracting thousands of tourists each year.
          If you are looking for comfortable accommodation in Alanya, our rental
          apartments are perfect for you! We provide an ideal solution for both
          tourists and homeowners.
        </p>
        <h3>Short and Long-Term Rental Options</h3>
        <p>
          Our apartments in Alanya offer the convenience of short-term rentals
          for holidaymakers, as well as being ideal for those looking for
          long-term stays. With daily, weekly, or monthly rental options, you
          can find comfortable accommodation at the best prices suited to your
          vacation duration. Whether you are looking for a short vacation or a
          long-term rental, we provide high-quality apartments that are easy to
          reach.
        </p>
        <h3>Comfort Near Beaches and Tourist Attractions</h3>
        <img
          src={extraImage2}
          alt="Apartment Near Beach"
          className="content-image"
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "auto",
            margin: "0 auto",
          }}
        />
        <p>
          Our apartments, located just 500 meters from Alanya's most popular
          beaches, bring the joy of the beach right to your doorstep.
          Additionally, we are situated within walking distance of the major
          tourist attractions in the area. This makes it easy to access the most
          popular sites in Alanya throughout your vacation. Restaurants,
          shopping streets, and entertainment venues are just steps away from
          your stay.
        </p>
        <h3>Quality Service Approach</h3>
        <p>
          To make your stay unforgettable, we aim for excellence in every detail
          with the quality service we offer. From cleanliness to security, from
          comfortable furniture to modern facilities, everything has been
          carefully designed. All the amenities you need for a relaxing holiday
          are in place.
        </p>
        <h3>Ease of Short-Term Rentals for Homeowners</h3>
        <p>
          We also offer short-term rental opportunities for homeowners. If you
          want to rent out your apartment, we provide a practical and reliable
          solution. You can earn income from your rental property and have no
          concerns about the management of your home, thanks to our professional
          service approach.
        </p>
        <h2>Choose Us for a Comfortable Vacation in Alanya</h2>
        <p>
          If you are looking for comfortable, practical, and high-quality
          accommodation in Alanya, you can contact us. Apartments that will make
          your holiday enjoyable with our various rental options and
          advantageous location are waiting for you!
        </p>
      </div>
    ),
  },
  {
    titleTR: "Kısa Dönem Ev Kiralama Avantajları",
    titleEN: "Advantages of Short-Term Rentals",
    descriptionTR: "Kısa dönem kiralama ile esnek ve ekonomik çözümler.",
    descriptionEN: "Flexible and economical solutions with short-term rentals.",
    image: image2,
    contentTR: (
      <div style={{ maxWidth: "900px", margin: "20px auto" }}>
        <h2>Kısa Dönem Ev Kiralamanın Avantajları</h2>
        <p>
          Seyahat ederken otel odalarında kalmak yerine kısa dönem kiralık evler
          size daha fazla konfor ve esneklik sunar. Kep Homes olarak, Alanya'da
          farklı bütçelere ve ihtiyaçlara hitap eden kiralık evlerimizle,
          konforlu bir konaklama deneyimi sağlıyoruz.
        </p>
        <h3>Ekonomik ve Esnek Çözümler</h3>
        <p>
          Otel fiyatlarının yüksek olduğu dönemlerde, kısa dönem kiralama
          seçenekleri çok daha uygun ve ekonomik bir çözüm sunar. Ayrıca, ev
          konforu ile kendinizi evinizde gibi hissedebilirsiniz.
        </p>
        <h3>Özel Alan ve Mahremiyet</h3>
        <p>
          Kısa dönem kiralık evler, otellerde bulamayacağınız özel alan ve
          mahremiyet sağlar. Aileler ve kalabalık gruplar için idealdir ve rahat
          bir tatil deneyimi sunar.
        </p>
      </div>
    ),
    contentEN: (
      <div style={{ maxWidth: "900px", margin: "20px auto" }}>
        <h2>Advantages of Short-Term Rentals</h2>
        <p>
          Instead of staying in hotel rooms during your travels, short-term
          rental apartments offer more comfort and flexibility. At Kep Homes, we
          provide comfortable accommodation experiences in Alanya with our
          rental apartments that cater to various budgets and needs.
        </p>
        <h3>Economic and Flexible Solutions</h3>
        <p>
          During periods when hotel prices are high, short-term rental options
          offer a much more affordable and economic solution. Additionally, you
          can feel right at home with the comfort provided.
        </p>
        <h3>Private Space and Privacy</h3>
        <p>
          Short-term rental apartments provide private spaces and privacy that
          you cannot find in hotels. They are ideal for families and large
          groups, offering a comfortable holiday experience.
        </p>
      </div>
    ),
  },
  {
    titleTR: "Kep Travel İle Evinizin Maksimum Gelir Kapısını Aralayın..",
    titleEN: "Maximize Your Income with Kep Travel",
    descriptionTR: "Ek gelir ve güvenilir kiracılarla kazancınızı artırın.",
    descriptionEN:
      "Increase your income with additional revenue and reliable tenants.",
    image: image3,
    contentTR: (
      <div style={{ maxWidth: "900px", margin: "20px auto" }}>
        <h2>Kep Travel İle Evinizin Maksimum Gelir Kapısını Aralayın</h2>
        <p>
          Evinizi kısa dönemli kiraya vererek ek gelir elde etmek istiyorsanız,
          Kep Homes & Travel ile çalışmak harika bir fırsattır. Profesyonel
          ekibimiz, evinizin en iyi şekilde tanıtılmasını ve yüksek kaliteli
          misafirler çekmesini sağlar.
        </p>
        <h3>Güvenilir Misafir Seçimi</h3>
        <p>
          Güvenilir ve saygılı misafirler seçmek, ev sahipleri için önemlidir.
          Kep Travel olarak, misafirlerimizi özenle seçiyor ve evinizin güvenli
          bir şekilde kullanıldığından emin oluyoruz.
        </p>
        <h3>Kolay ve Hızlı Süreç</h3>
        <p>
          Evinizi kiraya verme süreci bizimle çok daha kolay ve hızlı hale
          gelir. Kiracı ile iletişim kurmaktan temizlik ve bakım hizmetlerine
          kadar tüm detayları biz üstleniyoruz.
        </p>
      </div>
    ),
    contentEN: (
      <div style={{ maxWidth: "900px", margin: "20px auto" }}>
        <h2>Maximize Your Income with Kep Travel</h2>
        <p>
          If you want to earn extra income by renting your home on a short-term
          basis, working with Kep Homes & Travel is a great opportunity. Our
          professional team ensures that your home is promoted in the best way
          and attracts high-quality guests.
        </p>
        <h3>Reliable Guest Selection</h3>
        <p>
          Selecting trustworthy and respectful guests is important for
          homeowners. At Kep Travel, we carefully select our guests and ensure
          that your home is used safely.
        </p>
        <h3>Easy and Fast Process</h3>
        <p>
          The process of renting your home becomes much easier and faster with
          us. We take care of everything from communicating with the tenants to
          cleaning and maintenance services.
        </p>
      </div>
    ),
  },
];

const Blog = ({ isEnglish }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const postsPerPage = 6;

  // Sayfa numaralarını hesapla
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="blog-container">
      <h1 className="blog-header">
        {isEnglish ? "Kep Homes & Travel Blog" : "Kep Homes & Travel Blog"}
      </h1>
      <div className="blog-grid">
        {currentPosts.map((post, index) => (
          <div
            key={index}
            className="blog-card"
            onClick={() => handlePostClick(post)}
          >
            <img
              src={post.image}
              alt={isEnglish ? post.titleEN : post.titleTR}
              className="blog-image"
              style={{ width: "100%", maxWidth: "900px", height: "auto" }}
            />
            <h2 className="blog-title">
              {isEnglish ? post.titleEN : post.titleTR}
            </h2>
            <p className="blog-description">
              {isEnglish ? post.descriptionEN : post.descriptionTR}
            </p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`page-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {selectedPost && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <img
              src={selectedPost.image}
              alt={isEnglish ? selectedPost.titleEN : selectedPost.titleTR}
              className="modal-image"
              style={{ width: "100%", maxWidth: "900px", height: "auto" }}
            />
            {isEnglish ? selectedPost.contentEN : selectedPost.contentTR}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
