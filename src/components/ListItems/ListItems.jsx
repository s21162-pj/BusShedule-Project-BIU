import "./ListItems.css";

import { Link } from "react-router-dom";

export default function ListItems({ id, slug, name, itemBg }) {
  return (
    <li className={`list-item ${itemBg && "list-item-bg"}`}>
      <Link to={`/${slug}/${id}`}>{name}</Link>
    </li>
  );
}
