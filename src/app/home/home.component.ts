import { Component } from '@angular/core';
import {Router} from "@angular/router";


interface Clothes {
  size: any;
  clothesId: number,
  image: string;
  price: number;
  name:string;
  description: string;
  brand: string;
  stars: number;
  category: string;
  manufacture_date: Date;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  selectedCategory = 'All';
  searchQuery: string = '';
  filterdItems: Clothes[] = [];
  showSearchSection = false;
  sortBy: string | undefined;
  selectedPriceRange = 0;
  sortOrder: 'asc' | 'desc' = 'asc';


  clothes: Clothes[] = [
    {
      clothesId: 1,
      image: '/assets/duksevi/duks1.png',
      price: 2599,
      name: 'Ombre',
      description:
               'Men\'s sweatshirt brand Ombre.\n' +
          '- hood with laces\n' +
          '- elastic cuffs\n' +
          '- slim fit\n' +
          'Material: 95% cotton 5% elastane',
      brand: 'Ombre',
      stars: 3.5,
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      category: 'Sweatshirt',
      manufacture_date: new Date('2022-07-23'),
    },
    {
      clothesId: 2,
      image: '/assets/kosulje/kosulja1.png',
      price: 3500,
      name: 'Dstreet men white shirt',
      description: 'Amazing mens patterned shirt. Long sleeves with cuff and adjustable closure. Slim fit cut.',
      brand: 'Dstreet',
      stars: 4.0,
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      category: 'Shirt',
      manufacture_date: new Date('2023-11-01'),
    },
    {
      clothesId: 3,
      image: '/assets/jakne/jakna1.png',
      price: 5000,
      name: 'Winter Jacket',
      description: 'Men\'s  short winter jacket, 100% polyester',
      brand: 'Frogies',
      stars: 3,
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      category: 'Jacket',
      manufacture_date: new Date('2022-05-21'),
    },
    {
      clothesId: 4,
      image: '/assets/majce/majca1.png',
      price: 1599,
      name: 'Polo T-Shirt',
      description: '100% cotton',
      brand: 'Marc O Polo',
      stars: 5.0,
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      category: 'T-Shirt',
      manufacture_date: new Date('2019-07-15'),
    },
    {
      clothesId: 5,
      image: '/assets/duksevi/duks2.png',
      price: 2799,
      name: 'Men\'s  Sweatshirt Trendyol Ekru',
      description: 'Sweatshirt with hoodie',
      brand: 'Trendyol',
      stars: 3,
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      category: 'Sweatshirt',
      manufacture_date: new Date('2021-12-01'),
    },
    {
      clothesId: 6,
      image: '/assets/sakoji/sako1.png',
      price: 7800,
      name: 'Men\'s  jacket',
      description: 'Classic Dewberry mens jacket',
      brand: 'Dewberry',
      stars: 5.0,
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      category: 'Blazzer',
      manufacture_date: new Date('2023-05-16'),
    },
    {
      clothesId: 7,
      image: '/assets/kosulje/kosulja2.png',
      price: 2699,
      name: 'Green sleeve shirt',
      description: '85% polyester, 15 % cotton',
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      brand: 'Trendyol',
      stars: 3,

      category: 'Shirt',
      manufacture_date: new Date('2020-08-03'),
    },{
      clothesId: 8,
      image: '/assets/duksevi/duks3.png',
      price: 3499,
      name: 'Men\'s  Sweatshirt with Hoodie',
      description: 'Light Blue Sweatshirt, 100% cotton',
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      brand: 'Tendyol',
      stars: 4.5,
      category: 'Sweatshirt',
      manufacture_date: new Date('2022-11-23'),
    },{
      clothesId: 9,
      image: '/assets/sakoji/sako2.png',
      price: 12000,
      name: 'Men\'s  blazer',
      description: 'Regular fit, 85% polyester, 10% wool, 5% other',
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      brand: 'Jack & Jones',
      stars: 4.5,
      category: 'Blazzer',
      manufacture_date: new Date('2023-01-29'),
    },{
      clothesId: 10,
      image: '/assets/kosulje/kosulja3.png',
      price: 3899,
      name: 'Black Polo Shirt',
      description: 'Long sleeve shirt with 100% comfort',
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      brand: 'Marc O Polo',
      stars: 5.0,
      category: 'Shirt',
      manufacture_date: new Date('2023-07-23'),
    },{
      clothesId: 11,
      image: '/assets/sakoji/sako3.png',
      price: 5999,
      name: 'Dark Blue Jacket',
      description: 'Men\'s  jacket Dewberry Classic, 80% polyester',
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      brand: 'Dewberry',
      stars: 4,
      category: 'Blazzer',
      manufacture_date: new Date('2021-07-23'),
    },{
      clothesId: 12,
      image: '/assets/majce/majca2.png',
      price: 1399,
      name: 'Lee Cooper Original',
      description: 'Light Blue T-Shirt, 85% polyester',
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      brand: 'Trendyol',
      stars: 3.0,
      category: 'T-Shirt',
      manufacture_date: new Date('2022-09-02'),
    },{
      clothesId: 13,
      image: '/assets/kosulje/kosulja4.png',
      price: 1599,
      name: 'Regular Blue Shirt',
      description: 'Regular size T-Shirt, 90% polyester, 10% cotton',
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      brand: 'Trendyol',
      stars: 3.0,
      category: 'Shirt',
      manufacture_date: new Date('2021-08-09'),
    },{
      clothesId: 14,
      image: '/assets/jakne/jakna2.png',
      price: 3999,
      name: 'Quilted Men\'s  Jacket',
      description: 'Men\'s  Jacket with a hoodie, waterproof 100%',
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      brand: 'Frogies',
      stars: 4.0,
      category: 'Jackets',
      manufacture_date: new Date('2022-02-19'),
    },{
      clothesId: 15,
      image: '/assets/majce/majca3.png',
      price: 1999,
      name: 'Lee Cooper Navy T-Shirt',
      description: 'Regular size T-Shirt, 85% polyester, 15% cotton',
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      brand: 'Trendyol',
      stars: 4.5,
      category: 'T-Shirt',
      manufacture_date: new Date('2023-04-18'),
    },{
      clothesId: 16,
      image: '/assets/sakoji/sako4.png',
      price: 10999,
      name: 'Knit Blazzer Dujess1 - Men',
      description: 'Blazzer is an essential piece that definitely belong to mens wardrobe.',
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      brand: 'Celio',
      stars: 4.5,
      category: 'Blazzer',
      manufacture_date: new Date('2022-09-23'),
    },{
      clothesId: 17,
      image: '/assets/kosulje/kosulja6.png',
      price: 5999,
      name: 'Light Blue sleeve shirt',
      description: 'Slim Fit light blue shirt, it goes with every suit and color',
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      brand: 'Marc O Polo',
      stars: 5.0,
      category: 'Shirt',
      manufacture_date: new Date('2024-01-13'),
    },{
      clothesId: 18,
      image: '/assets/duksevi/dusk4.png',
      price: 3999,
      name: 'Lonsdale London Sweatshirt',
      description: '90% cotton, 10% polyester',
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      brand: 'Lonsdale',
      stars: 4.5,
      category: 'Sweatshirt',
      manufacture_date: new Date('2021-04-13'),
    },{
      clothesId: 19,
      image: '/assets/majce/majca4.png',
      price: 1699,
      name: 'Cocaine Lonsdale T-Shirt',
      description: 'Regular size T-Shirt, 90 % polyester, 10 % cotton',
       size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      brand: 'Lonsdale',
      stars: 5.0,
      category: 'T-Shirt',
      manufacture_date: new Date('2023-03-23'),
    },{
      clothesId: 20,
      image: '/assets/sakoji/sako5.png',
      price: 8399,
      name: 'Regular Fit Linen Blend Blazer',
      description: 'Regular Fit Blazzer for men, ideal for weddings',
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      brand: 'DeFacto',
      stars: 5.0,
      category: 'Blazzer',
      manufacture_date: new Date('2023-03-24'),
    },{
      clothesId: 21,
      image: '/assets/jakne/jakna3.png',
      price: 4999,
      name: 'Men\'s Jacket Frogies Quilted Black',
      description: 'Black Frogies Jacket, water resistant',
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      brand: 'Frogies',
      stars: 3.0,
      category: 'Jacket',
      manufacture_date: new Date('2021-07-28'),
    },{
      clothesId: 22,
      image: '/assets/majce/majca5.png',
      price: 4999,
      name: 'White Polo T-Shirt',
      description: 'Regular size T-Shirt 100% cotton',
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      brand: 'Marc O Polo',
      stars: 5.0,
      category: 'T-Shirt',
      manufacture_date: new Date('2023-12-12'),
    },{
      clothesId: 23,
      image: '/assets/duksevi/duks5.png',
      price: 2499,
      name: 'Regular Fit Sweatshirt',
      description: 'Dark Green Sweatshirt with a Hoodie',
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      brand: 'Levis',
      stars: 4.5,
      category: 'Sweatshirt',
      manufacture_date: new Date('2023-06-14'),
    },{
      clothesId: 24,
      image: '/assets/jakne/jakna4.png',
      price: 7999,
      name: 'Leather Jacket',
      description: 'Waterproof leather jacket for bike rides',
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      brand: 'Levis',
      stars: 5.0,
      category: 'Jacket',
      manufacture_date: new Date('2020-10-07'),
    },
    {
      clothesId: 25,
      image: '/assets/jakne/jakna5.png',
      price: 2499,
      name: 'Dstreet Classic Men\'s Jacket',
      description: 'Perfect for walks in the park, 100% polyester',
      size: ['S','M', 'L', 'XXL', '2XL', '3XL'],
      brand: 'Dstreet',
      stars: 2.0,
      category: 'Jacket',
      manufacture_date: new Date('2019-08-30'),

    }

  ];
  constructor(private router: Router) {
    this.filterdItems = this.getFilteredItems();
  }
  logout() {
    this.router.navigate(['/login']);
  }


  filterItems() {
    let filtered = this.clothes.filter((clothes) => {
      return (clothes.name.toLowerCase().includes(this.searchQuery.toLowerCase()) && (clothes.category === this.selectedCategory || this.selectedCategory === 'All'));
    });
    return filtered.sort((a, b) => {
      let order = this.sortOrder === 'asc' ? 1 : -1;
      if (this.sortBy === 'price') {
        return order * (a.price - b.price);
      }else if (this.sortBy === 'manufacture_date') {
        return order * (new Date(a.manufacture_date).getTime() - new Date(b.manufacture_date).getTime());
      }
      return 0;
    });
  }

  getFilteredItems(): Clothes[] {
    return this.clothes.filter(clothes => clothes.price <= this.selectedPriceRange);
  }

  sortByPrice() {
    this.sortBy = 'price';
    this.filterdItems = this.filterItems();
  }

  sortByReleaseDate() {
    this.sortBy = 'manufacture_date';
    this.filterdItems = this.filterItems();
  }

  toggleSortOrder() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.filterdItems = this.filterItems();
  }

  search() {
    this.showSearchSection = true;
    this.filterdItems = this.filterItems();
  }
  viewBookDetails(bookId: number) {
    this.router.navigate(['/book-details', bookId]);
  }






  sizes: string[] = ['S', 'M', 'L', 'XXL', '2XL', '3XL'];
  protected readonly parseInt = parseInt;
}

/*
    filterBooks() {
      let filtered = this.books.filter((book) => {
        return (book.name.toLowerCase().includes(this.searchQuery.toLowerCase()) && (this.selectedCategory === 'All' || book.category === this.selectedCategory));
      });
      return filtered.sort((a, b) => {
        let order = this.sortOrder === 'asc' ? 1 : -1;
        if (this.sortBy === 'price') {
          return order * (a.price - b.price);
        } else if (this.sortBy === 'page_number') {
          return order * (a.page_number - b.page_number);
        } else if (this.sortBy === 'releas_date') {
          return order * (new Date(a.releas_date).getTime() - new Date(b.releas_date).getTime());
        }
        return 0;
      });
    }

    getFilteredBooks(): Book[] {
      return this.books.filter(book => book.price <= this.selectedPriceRange);
    }

    sortByPrice() {
      this.sortBy = 'price';
      this.filteredBooks = this.filterBooks();
    }

    sortByPageNumber() {
      this.sortBy = 'page_number';
      this.filteredBooks = this.filterBooks();
    }

    sortByReleaseDate() {
      this.sortBy = 'releas_date';
      this.filteredBooks = this.filterBooks();
    }

    toggleSortOrder() {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      this.filteredBooks = this.filterBooks();
    }

    search() {
      this.showSearchSection = true;
      this.filteredBooks = this.filterBooks();
    }

    logout() {
      this.router.navigate([('/login')]);
    }

    viewBookDetails(bookId: number) {
      this.router.navigate(['/book-details', bookId]);
    }

  }
*/
