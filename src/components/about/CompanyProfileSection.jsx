import profileImage from "../../assets/images/profile-image.png";

export default function CompanyProfileSection() {
  return (
    <div className="px-6 lg:px-20 py-6 lg:py-20">
      <section className="mb-4 text-xl font-bold">Company Profile</section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <img src={profileImage} className="w-120" />
        <div className="grid grid-cols-1 lg:grid-cols-2 py-5">
          <div className="title-company w-4/5 font-bold">Name of Company</div>
          <div className="subtitle">CV AFRA</div>
          <div className="title-company w-4/5 font-bold">Legality</div>
          <div className="subtitle">PERSONAL / PERDAGANGAN</div>
          <div className="title-company w-4/5 font-bold">Date of birth</div>
          <div className="subtitle">08 June 2007</div>
          <div className="title-company w-4/5 font-bold">
            Date of First Export
          </div>
          <div className="subtitle">&nbsp;</div>
          <div className="title-company w-4/5 font-bold">Director</div>
          <div className="subtitle">AGUS SUGIANTO</div>
          <div className="title-company w-4/5 font-bold">
            Operational & Production manager
          </div>
          <div className="subtitle">PUJUT PURNAMA</div>
          <div className="title-company w-4/5 font-bold">Kind of Product</div>
          <div className="subtitle">HARDWOOD CHARCOAL</div>
          <div className="title-company w-4/5 font-bold">
            Monthly Production Capacity
          </div>
          <div className="subtitle">110 Ton</div>
          <div className="title-company w-4/5 font-bold">Office address</div>
          <div className="subtitle">
            BTN SURYA GRAHA LESTARI BLOK N2 TABANAN - BALI
          </div>
          <div className="title-company w-4/5 font-bold">Telp and Fax</div>
          <div className="subtitle">+62 821 4884 2070 </div>
          <div className="title-company w-4/5 font-bold">Email</div>
          <div className="subtitle">AGUSCHARCO@HOTMAIL.COM</div>
          <div className="title-company w-4/5 font-bold">
            Warehouse and Storage location
          </div>
          <div className="subtitle">
            KOMPLEK GUDANG ARANG, JL. 28 OKTOBER SIANTAN HULU, PONTIANAK -
            KALBAR
          </div>
        </div>
      </section>
    </div>
  );
}
