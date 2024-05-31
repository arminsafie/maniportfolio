// eslint-disable-next-line react/prop-types
export default function ClientsItem({ img }) {
  return (
    <>
      <li className="clients-item">
        <a href="#">
          <img src={img} alt="client logo" />
        </a>
      </li>
    </>
  );
}
