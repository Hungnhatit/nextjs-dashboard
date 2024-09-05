'use client'
import Header from "../components/Header/header";
import Search from "../components/Search/search";

export default function Dashboard() {
  const navLinks = [
    { name: 'Home', href: '/dashboard' },
    { name: 'Product', href: '/dashboard' },
    { name: 'Services', href: '/dashboard' },
    { name: 'Contact', href: '/dashboard' },
  ];

  const productions = [
    {
      productName: "iPhone",
      productBrand: "Apple",
      productPrice: "2000$",
      quantity: 20,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      productName: "Samsung Galaxy",
      productBrand: "Samsung",
      productPrice: "1500$",
      quantity: 30,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      productName: "Pixel",
      productBrand: "Google",
      productPrice: "1200$",
      quantity: 15,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      productName: "MacBook Pro",
      productBrand: "Apple",
      productPrice: "2500$",
      quantity: 10,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      productName: "Surface Laptop",
      productBrand: "Microsoft",
      productPrice: "1800$",
      quantity: 25,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      productName: "Surface Laptop",
      productBrand: "Microsoft",
      productPrice: "1800$",
      quantity: 25,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      productName: "Surface Laptop",
      productBrand: "Microsoft",
      productPrice: "1800$",
      quantity: 25,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    }
  ];

  const user = {
    name: 'Nguyen Nhat Hung',
  };

  return (
    <div className="h-screen w-full bg-slate-100 text-black">
      <Header title="Dashboard" navLinks={navLinks} user={user}></Header>
      <Search></Search>
     
    </div>
  )
}