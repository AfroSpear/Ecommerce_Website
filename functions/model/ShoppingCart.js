class ShoppingCart {
     // product: {id, name, price, summary, image, image_url}
     // qty: 1
     // content= [
     //   {} products:{..} 
     // qty: 2}   
     //]


    constructor() {
        this.contents = []
    }

    add(product) {
        let found = false
        for (const item of this.contents) {
            if(item.product.id === product.id) {
                found = true
                ++item.qty
            }
        }
        if (!found) {
            this.contents.push({product, qty: 1})
        }
    }

    delete(id) {
        for (let i = 0; i < this.contents.length; i++) {
        let item = this.contents[i]
        if(item.id === id) {
            --item.qty
        }
        }
       
    }

    getTotal() {
        let sum = 0
        for (const item of this.contents) {
            sum += item.qty * item.product.price
            
        }
        return sum
       
    }

    getTax() {
        let sum = 0
        for (const item of this.contents) {
            sum += item.qty * item.product.price
            
        }
       let tax = sum * 0.07
       return tax
       
    }

    getAfterTax() {
        let sum = 0
        for (const item of this.contents) {
            sum += item.qty * item.product.price
            
        }
        let tax = sum * 0.07
        let afterTax = sum + tax
        return afterTax
    }


    serialize() {
        return this.contents
    }

    // ShoppingCart.deserialize(serial_data)
    static deserialize(sdata) {
        const cart = new ShoppingCart()
        cart.contents = sdata
        return cart
    }
}

module.exports = ShoppingCart