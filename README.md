# { Null Is Not != an Option } BLOGS

Welcome to **Null Is Not an Option** , a collection of deep dive blogs on programming topics I explore and learn along the way.


Today we will start a journey through which we will answer a saying which we often say in Bangla:

> _"সোজা জিনিস ঘুরিয়ে খাইয়া লাভ কি?"_  
> _("What's the point of making simple things complicated for no reason?")_

Guess what? **Today, we will find out the "Reason".**

---

We will start by knowing overall about **"TypeScript"**:

> _"How does TypeScript help in improving code quality and project maintainability?"_

Then we will deep dive into topics like:

- **Mystery Of Types (`any`, `unknown` and `never`)**
- And at the end we will see the **"Fight Between Interfaces and Types (Interfaces vs Types)"**

> _Spoiler!!!_  
> _They both win, in their own games._

---

I guess that would be enough for today,  
**Otherwise, I risk three things:**

1. Someone falling asleep halfway through,  
2. Someone yelling _"Not again with the types!"_,  
3. Or worse… someone encountering a bug and blaming me for it.
So let's Get Started !!!

# Blog 1:
# "How does TypeScript help in improving code quality and project maintainability?"
> _" Why the hack we need typescript anyway :) "_

The name "Typescript" itself tells us that "scripting with type" so Type is one of the many Reason why "typescript" was invented, and " Type " itself is a serious and important thing. TypeScript allows you to define the expected types for variables, constants, function parameters, return values, object properties, arrays, tuples, interfaces, class properties and methods, type aliases, generics, enums, function types (signatures), optional and default parameters, rest parameters, this context, typeof and keyof expressions, conditional types, mapped types, and built-in utility types like Partial or Readonly... peww That's a LOT. SO why is this ? 
1. **Early Error Detection:** It helps catch type-related bugs during development before running the code, reducing runtime errors.
2. **Improved Code Readability and Maintainability:** Clearly defined types make the code easier to understand, document, and maintain, especially in large projects or teams.
3. **Enhanced Developer Tooling:** Type information enables powerful IDE features like autocompletion, refactoring support, and real-time feedback, improving developer productivity.

there's one other thing "Security":

1. **Prevents Type-Based Vulnerabilities:** By enforcing strict type checks, it helps prevent issues like passing the wrong data types into functions mistakes that can lead to logic errors or even vulnerabilities (unsafe type coercion or logic bypasses).

2. **Reduces Attack Surface from Undefined Behavior:** TypeScript helps avoid `undefined` or `null` errors that attackers might exploit (accessing properties on `undefined`, leading to crashes or unintended behavior).

3. **Encourages Safer Design Patterns:** With strict typing, developers are more likely to write clear, predictable, and well-structured code, which reduces the chances of introducing insecure logic or misusing APIs.

Are those reasons gonna satisfy you? I don't Know... don't guess me wrong, there are so many reasons to convince you...



# Blog 2:
**Mystery Of Types (`any`, `unknown` and `never`)**
# **Explain the difference between any, unknown, and never types in TypeScript.**




> *“I’ve seen these types So many Times but never really *got* them.”*

Well, **we’re going to solve the mystery** **what is the deal with these types?**

---

### First things first:

What exactly do **`any`**, **`unknown`**, and **`never`** mean? These types have a mysterious power in TypeScript, but they aren't as dangerous as they sound. Or maybe they are...

---

### **`any`: The Wild Card**

> *“What happens if you don't care about types and want to do whatever you want?”*

Enter **`any`**: the type that says, “Do anything, anywhere, anytime.” It’s the ultimate freedom and also the ultimate responsibility. With `any`, you can assign any type of value to a variable, and TypeScript Let you to do.

#### Real Example of `any`:

```typescript
let var1: any = 5;
var1 = "Hello";  
var1 = true; // you assign whatever you want to     
```

so that's mean **`any`** completely disables type checking. This gives you maximum flexibility but you lose the power of typescript. This can be dangerous because it allows you to make mistakes without TypeScript warning you.

**When to use it?**
Use **`any`** when you’re dealing with unknown values (like data coming from an API) where you’re not sure what type you’ll get. But **beware** use it wisely, because if you start using `any` everywhere, TypeScript becomes JavaScript :) .

---

### **`unknown`: The Safer `any`**

> *“I need freedom, but not *too* much freedom.”*

That’s where **`unknown`** comes in. It’s like `any`, but **a little less Dengerous**. With `unknown`, TypeScript forces you to check the type before you do anything with it. It’s like, “I don't know what it is, but I’m going to be cautious with it.”

#### Real Example of `unknown`:

```typescript
let myVar: unknown = 5;

if (typeof myVar === "string") {
    console.log(myVar.toUpperCase());  // Safe to use now
} else {
    console.log("It's not a string, I won't try to change it!");
}
```

Notice that TypeScript **forces** us to check the type. Unlike `any`, `unknown` **doesn’t allow us to do anything with the value until we confirm what it is**.

**When to use it?**
Use **`unknown`** when you're dealing with values that could be of any type, but you want to be safe and ensure you're handling it properly before doing anything. Most of the time I personally chose this option

---

### **`never` : The Black Hole of Types** (kiding)

> *“What happens when you don’t want a function to return anything?”*

Ahhh, now we’re talking about **`never`**. It’s a special type that tell us **“nothing”** to do . If a function or expression has a type of `never`, it means **it will never successfully complete**. This is used for cases like throwing errors, infinite loops, or situations where something is designed to never return.

#### Real Example of `never`:

```typescript
function throwError(message: string): never {
    throw new Error(message);  // This function never returns
}

function infiniteLoop(): never {
    while (true) {
        console.log("I'm stuck in an infinite loop!");
    }
}
```

Notice that we can’t return anything from the `throwError` function. **It will never return a value**, 
**When to use it?**
You Already KNOW !!!




# Blog 3:
## **"Fight Between Interfaces and Types (Interfaces vs Types)"**

Frist I will say Think of they are TWIN. They has their similiarity and as well as differences.  
so let's start with the syntax:

### interface :

```typescript
interface Person {
    name: string;
    age: number;
}
````

### type Alias:

```typescript
type Person = {
    name: string;
    age: number;
};
```

for the syntex interface is just looks like making an object but for the type Alias it's more like making a variable

---

### Then let's move on to their functionalities:

#### interface:

Interface can extend with other interfaces. This allows us to make complex types of interfaces. but to marge two interfaces we need to use the keyword "extends". For example:

```typescript
interface Employee extends Person {
    position: string;
}
```

#### Type Alias:

On the other hand, if we need to extend type allias we need to use intersections (`&`), which combines multiple types into one. For example:

```typescript
type Employee = Person & {
    position: string;
};
```

---

### Now let's jumped into the Use Cases:

#### Interface:

Interfaces are generally used for defining shapes of objects or class structures. They are good when you’re working with object oriented code or when you need to define class type.

```typescript
interface Shape {
    width: number;
    height: number;
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}
}
```

#### Type Alias :

Type Alias is more easy to use when we need to define primitive types.

```typescript
type StringOrNumber = string | number;
```

---

## 🏁 Conclusion:

So, who wins in the fight between interfaces and types?
Well, there’s no clear winner. It depends on what you need.
If you’re dealing with object shapes or classes go with interfaces.
If you need something simple or want to combine types easily type alias might be better.
In the end, they’re both great tools. Just use what fits best for your work!


# the END

pewww,, So finally it's the End. Thank you everyone, thanks for your attention , I'm exhausted right now I bet you are too. IT's took a long time for me to wrote down everything after all it was my first Blog. I'm not a professional writer so forgive me if there is some grammatical or spelling mistakes. BEST OF LUCK ALL 
