// Compiled with TypeScript target ES6

function formatString(input: string, toUpper?: boolean): string {
    return (toUpper ?? true) ? input.toUpperCase() : input.toLowerCase();
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating > 4);
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    // Edge case, empty input
    if (!arrays.length) {
        return [];
    }
    const result: T[] = [];

    // geting tye first array type
    const firstElement = arrays[0][0];
    const firstElementType = typeof firstElement;


    //here using "in" instead of "of" could make it complicated.
    //"of" give the value, "in" give the index but as "string"
    for(const array of arrays) {
        for(const singleItem of array){
            if(typeof singleItem !== firstElementType) {
                throw new Error("all Arrays must be of the same type");
            };
            result.push(singleItem);
        }
    }

    // i could be done in one line
    //return ([] as T[]).concat(...arrays);
    // but it's feels like magic 
    return result;
}




class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year); 
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`;
    }
}



function processValue(value: string | number): number {
    if (typeof value === "number") {
        return (value*2);
    }
    // sometimes doing manually can brings back memory
    else{
        let total :number = 0;
        for(const singleString: string of value){
            // we didn't need to use singleString
            total++;
        }
        return total;
    }

    //it could be done in one line
    //return typeof value === "number" ? value * 2 : value.length;
}


interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
  
    let mostExpensive: Product = products[0];
  
    for (const product of products) {
      if (product.price > mostExpensive.price) {
        mostExpensive = product;
      }
    }
  
    return mostExpensive;
  }


  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {

    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
      } else {
        return "Weekday";
      }
  }


  async function squareAsync(n: number): Promise<number> {
    // checking 
    if (n < 0) {
      throw new Error("Negative number not allowed");
    }
  
    // wait 1 second
    await new Promise(resolve => setTimeout(resolve, 1000));
    return n * n;
  }

  
