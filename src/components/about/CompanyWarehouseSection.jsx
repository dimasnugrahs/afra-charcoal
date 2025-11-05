import profileImage from "../../assets/images/profile-image.png";

export default function CompanyWarehouseSection() {
  return (
    <div className="px-6 lg:px-20 py-6 lg:py-20 mb-20">
      <section className="mb-4 text-xl font-bold">Warehouse</section>
      <section className="grid grid-cols-1">
        <img src={profileImage} className="w-120" />
      </section>
    </div>
  );
}
