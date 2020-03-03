import React from 'react'

const Returns = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="title">Our Returns Policy</div>
        <div className="info">
          <p>
            {' '}
            Thanks for purchasing our products at [website] operated by [name].
            In order to be eligible for a refund, you have to return the product
            within 30 calendar days of your purchase. The product must be in the
            same condition that you receive it and undamaged in any way. After
            we receive your item, our team of professionals will inspect it and
            process your refund. The money will be refunded to the original
            payment method you’ve used during the purchase. For credit card
            payments it may take 5 to 10 business days for a refund to show up
            on your credit card statement. If the product is damaged in any way,
            or you have initiated the return after 30 calendar days have passed,
            you will not be eligible for a refund. If anything is unclear or you
            have more questions feel free to contact our customer support team.{' '}
          </p>
          <br />
          <a
            href="https://www.royalmail.com/track-my-return/pick-a-retailer"
            target="_blank"
          >
            Click to print returns label
          </a>
        </div>
        <div className="container">
          <div className="title">Our Shipping Policy</div>
          <p>
            Thank you for visiting and shopping at Golden Shoe. Following are
            the terms and conditions that constitute our Shipping Policy.
            Domestic Shipping Policy Shipment processing time All orders are
            processed within 2-3 business days. Orders are not shipped or
            delivered on weekends or holidays. If we are experiencing a high
            volume of orders, shipments may be delayed by a few days. Please
            allow additional days in transit for delivery. If there will be a
            significant delay in shipment of your order, we will contact you via
            email or telephone.
            <br />
            <br />
            <h1 style={{ fontWeight: 800 }}>
              Shipment method, Estimated delivery time & Shipment cost{' '}
            </h1>
            <p>
              RoyalMail Standard 3-5 business days <strong>Free</strong>
            </p>
            <p>
              RoyalMail Two Days 2 business days <strong>£4.95</strong>
            </p>
            <p>
              RoyalMailOvernight * 1-2 business days <strong>£9.95 </strong>
            </p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Returns
