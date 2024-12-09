import { useParams } from 'react-router-dom';
import NotAvailable from './NotAvailable/NotAvailable';
import { categoryMap } from './data';

export default function MovieCategory() {
  const { category } = useParams();
  const Component = categoryMap[category] || NotAvailable;
  return Component === NotAvailable ? <NotAvailable>{category} page is not available</NotAvailable> : <Component />;
}
