import React from "react";
import Image from "next/image";
import Link from "next/link";

const taxData = [
  { state: 'AL', median: '0.41%', mean: '0.40%', medianValue: '$101,702', tax: '$645' },
  { state: 'AK', median: '1.04%', mean: '1.19%', medianValue: '$282,800', tax: '$2,948' },
  { state: 'AZ', median: '0.62%', mean: '0.66%', medianValue: '$206,400', tax: '$1,268' },
  { state: 'AR', median: '0.62%', mean: '0.61%', medianValue: '$142,300', tax: '$879' }
];

const CalculatorFAQSection = () => {
  return (
    <div className="bg-white text-black">
      <div className="row my-5">
        <div className="border-t border-black"></div>
        <div className="mb-5 mt-5">
          <h4 className="text-4xl mb-10">How does a mortgage calculator help me?</h4>
          <p className="text-muted my-3">
            When deciding how much house you can afford, one of the most
            important pieces to determine is whether a home will fit into your
            monthly budget. A mortgage calculator helps you understand the
            monthly cost of a home. And can allow you to enter different down
            payments and interest rates to help determine what is affordable for
            you.
          </p>
        </div>

        <div className="border-t border-black"></div>

        <div className="mb-5 mt-5">
          <h4 className="text-4xl mb-10">
            How much monthly mortgage payment can I afford?
          </h4>
          <p className="text-muted my-3">
            Lenders determine how much you can afford on a monthly housing
            payment by calculating your debt-to-income ratio (DTI). The maximum
            DTI you can have in order to qualify for most mortgage loans is
            often between 45-50%, with your anticipated housing costs included.
          </p>

          <p className="text-muted my-3">
            Your DTI is the balance between your income and your debt. It helps
            lenders understand how safe or risky it is for them to approve your
            loan. A DTI ratio represents how much of your gross monthly income
            is spoken for by creditors, and how much of it is left over to you
            as disposable income. It&apos;s most commonly written as a percentage.
            For example, if you pay half your monthly income in debt payments,
            you would have a DTI of 50%.
          </p>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8 px-5">
              <p className="my-3">Formula for calculating your debt-to-income (DTI) ratio:</p>
              <Image 
                src="/media/dti-formula.jpg" 
                alt="DTI Formula calculation diagram"
                width={800}
                height={400}
                className="w-full h-auto"
              />

              <p className="my-3">
                Here&apos;s an example of what calculating your DTI might look like:
              </p>
              <Image 
                src="/media/dti-example.jpg" 
                alt="DTI calculation example"
                width={800}
                height={400}
                className="w-full h-auto mb-5"
              />
            </div>
            <div className="col-2"></div>
          </div>

          <div className="border-t border-black"></div>

          <div className="mt-5 mb-5">
            <h4 className="text-4xl mb-10">
              How to calculate monthly mortgage payments?
            </h4>
            <p className="text-muted my-3">
              Your monthly mortgage payment includes loan principal and
              interest, property taxes, homeowners insurance, and mortgage
              insurance (PMI), if applicable. While not typically included in
              your mortgage payment, homeowners also pay monthly utilities and
              sometimes pay homeowners association (HOA) fees, so it&apos;s a good
              idea to factor these into your monthly budget. This mortgage
              calculator factors in all these typical monthly costs so you can
              really crunch the numbers.
            </p>

            <h6 className="text-2xl my-6">Formula for calculating monthly mortgage payments</h6>
            <p className="text-muted my-3">
              The easiest way to calculate your mortgage payment is to use a
              calculator, but for the curious or mathematically inclined, here&apos;s
              the formula for calculating principal and interest yourself:
            </p>

            <div className="row">
              <div className="col-2"></div>
              <div className="col-8 px-5">
                <Image
                  src="/media/monthly-mortgage-payments-formula.jpg"
                  alt="Monthly mortgage payment formula"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />

                <p className="my-3">Where:</p>
                <ul>
                  <li>M is monthly mortgage payments</li>
                  <li>
                    P is the principal loan amount (the amount you borrow)
                  </li>
                  <li>
                    r is the monthly interest rate <br />
                    <p className="text-muted">
                      (annual interest rate divided by 12 and expressed as a
                      decimal)
                    </p>
                    <p className="text-muted">For example:</p>
                    <p className="text-muted">if the annual interest rate is 5%,</p>
                    <p className="text-muted">the monthly rate would be 0.05/12 = .00417, or .417%</p>
                  </li>
                  <li>
                    n is the total number of payments in months
                    <p className="text-muted">For example:</p>
                    <p className="text-muted">for a 30-year loan, n = 30×12 = 360 months</p>
                  </li>
                </ul>
                <p className="text-muted my-3">Here&apos;s a simple example:</p>
                <Image
                  src="/media/monthly-mortgage-payments-example.jpg"
                  alt="Monthly mortgage payment example"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="col-2"></div>
            </div>
            <p className="text-muted my-3">This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you&apos;ll still need to add on taxes, insurance, utilities, and HOA fees if applicable.</p>
          </div>
        </div>
        <div className="border-t border-black"></div>
        
        <div className="mb-5 mt-5">
          <h6 className="text-2xl my-6">How to use this mortgage calculator?</h6>
          <p className="text-muted my-3">
            Play around with different home prices, locations, down payments, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.
          </p>
          <p className="text-muted my-3">Increasing your down payment and decreasing your interest rate and mortgage term length will make your monthly payment go down. Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount that&apos;s less than 20% of the home price, private mortgage insurance (PMI) costs will be added to your monthly mortgage payment. As the costs of utilities can vary from county to county, we&apos;ve included a utilities estimate that you can break down by service. If you&apos;re thinking about buying a condo or into a community with a Homeowners Association (HOA), you can add HOA fees.</p>
          <p className="text-muted my-3">The only amounts we haven&apos;t included are the money you&apos;ll need to save for annual home maintenance/repairs or the costs of home improvements. To see how much home you can afford including these costs, take a look at the Better home affordability calculator.</p>
          <p className="text-muted my-3">Fun fact: Property tax rates are extremely localized, so two homes of roughly the same size and quality on either side of a municipal border could have very different tax rates. Buying in an area with a lower property tax rate may make it easier for you to afford a higher-priced home.</p>

          <h6 className="text-2xl my-6">Do you know your property tax rate?</h6>
          <p className="text-muted my-3">While exact property tax rates vary by county, it can be helpful to look at taxes on the state level to get an idea for taxes in your state. Here&apos;s a helpful chart from Forbes breaking down the Census Bureau&apos;s 2021 American Community Survey 5-year estimate:</p>
        
          <div className="table-responsive">
            <table className="table table-striped">
              <thead className="bg-[#1DBF73] text-white">
                <tr>
                  <th>State</th>
                  <th>Median Effective Property Tax Rate</th>
                  <th>Mean Effective Property Tax Rate</th>
                  <th>Median Home Value</th>
                  <th>Median Property Taxes Paid</th>
                </tr>
              </thead>
              <tbody>
                {taxData.map((row, index) => (
                  <tr key={index}>
                    <td className="fw-bold">{row.state}</td>
                    <td>{row.median}</td>
                    <td>{row.mean}</td>
                    <td>{row.medianValue}</td>
                    <td>{row.tax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="border-t border-black"></div>

        <div className="mb-5 mt-5">
          <h4 className="text-4xl mb-10">How is Better&apos;s mortgage calculator different?</h4>
          <h6 className="text-2xl my-6">This mortgage calculator shows your payments with taxes and insurance</h6>
          <p className="text-muted my-3">
            The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.
          </p>

          <p className="text-muted my-3">Your lender will usually require you to have homeowners insurance while you&apos;re settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that&apos;s been damaged or destroyed.</p>

          <p className="text-muted my-3">Here&apos;s an interesting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. However, to ensure your home is protected against damages caused by fires, lightning strikes, and natural disasters that are common in your area, it is highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator.</p>

          <h6 className="text-2xl my-6">This mortgage calculator shows your mortgage costs with PMI</h6>

          <p className="text-muted my-3">PMI, an abbreviation for private mortgage insurance, aids potential homeowners in qualifying for a mortgage without the necessity of a 20% down payment. By opting for a lower down payment and choosing a mortgage with PMI, you can purchase a home sooner, begin accruing equity, and keep cash available for future needs. This can all be calculated using this Mortgage Calculator.</p>
          <p className="text-muted my-3">Choosing a mortgage with PMI is a popular option: 71% of first-time homebuyers had a down payment of less than 20% in July 2021. In 2020, the median down payment for first-time homebuyers was just 7%, and it hasn&apos;t risen above 10% since 1989.</p>
          <p className="text-muted my-3">PMI is automatically removed from conventional mortgages once your home equity reaches 22%. Alternatively, you can request the removal of PMI once you&apos;ve accumulated at least 20% home equity.</p>

          <h6 className="text-2xl my-6">This mortgage calculator includes HOA fees</h6>
          <p className="text-muted my-3">Homeowners association (&quot;HOA&quot;) fees are typically charged directly by a homeowners association, but as HOA fees come part and parcel with condos, townhomes, and planned housing developments, they&apos;re an essential factor to consider when calculating your mortgage costs.</p>
          <p className="text-muted my-3">Homes that share structural elements, such as roofs and walls, or community amenities like landscaping, pools, or BBQ areas, often require homeowners to pay HOA fees for the maintenance of these shared features. It&apos;s important to factor in these costs during your budget planning stage, especially considering that HOA fees typically increase annually. HOAs may also charge additional fees known as &apos;special assessments&apos; to cover unexpected expenses from time to time.</p>
        </div>

        <div className="border-t border-black"></div>

        <div className="mb-5 mt-5">
          <h4 className="text-4xl mb-10">How to reduce your monthly mortgage payments?</h4>
          <p className="text-muted my-3">The lower the purchase price of the home, the lower your loan amount will be. But if the seller is less than willing to cut you a deal, you have other options.</p>
          <h6 className="text-2xl my-6">Extend the length of your mortgage</h6>
          <p className="text-muted my-3">
            The more time you have to pay off the mortgage, the less each monthly mortgage payment will be. (In lender-speak, &apos;extending the length of your mortgage&apos; is known as &apos;increasing your loan term&apos;.) This is why people often choose a 30-year fixed rate mortgage over one with a 15- or 20-year term.
          </p>

          <h6 className="text-2xl my-6">Increase your down payment</h6>
          <p className="text-muted my-3">
            The smaller the amount of your mortgage, the smaller your monthly mortgage payments will be. If you&apos;re able to put at least 20% of the home price towards your down payment, you&apos;ll be able to avoid PMI (private mortgage insurance). Even if you can&apos;t afford a complete 20% down payment, boosting your down payment will help you get PMI removed sooner. In fact, boosting your down payment by 5% can lower your monthly PMI fees.
          </p>

          <h6 className="text-2xl my-6">Get a lower interest rate</h6>
          <p className="text-muted my-3">
            Increasing your down payment can be one way to help you qualify for a lower interest rate. The amount of your down payment compared to the total amount of the loan is called your loan-to-value ratio (LTV).
          </p>

          <p className="text-muted my-3">Depending on your loan amount, a lower LTV may increase the likelihood of you being offered a low interest rate. If you intend on keeping your home for a while, you could consider buying points to reduce your interest rate. Buying points essentially means you agree to pay more upfront costs in exchange for a lower monthly payment.</p>
          <p className="text-muted my-3">If you think you may sell or refinance the home in the first 5-10 years of the mortgage, you could consider an adjustable-rate mortgage (ARM). An ARM offers a lower fixed interest rate for a set introductory period—typically 5, 7, or 10 years. Once the set introductory period ends, the interest rate adjusts (interest rate may increase after consummation). The introductory interest rate for ARMs is typically lower than the interest rate for a conventional fixed-rate mortgage which could make it a great way to save on interest if you know you won&apos;t keep the mortgage for long.</p>
          <p className="text-muted my-3">If you&apos;re not planning on buying a home for a while, improving your credit score is a tried and true way of increasing your chances of qualifying for a lower interest rate. By reducing your debt-to-income ratio (DTI), lenders will see that you comfortably afford your mortgage and may be more willing to offer a lower interest rate.</p>
        </div>

        <div className="border-t border-black"></div>

        <div className="mb-5 mt-5">
          <h4 className="text-4xl mb-10">How much home can I afford?</h4>
          <p className="text-muted my-3">
            Once again, the easiest way to do this is with a calculator! To know if a home is in your budget, try out our home affordability calculator. This calculator will take a few inputs from you, like income and savings, and let you know the maximum amount of home you can afford.
          </p>
        </div>

        <div className="border-t border-black"></div>

        <div className="mb-5 mt-5">
          <h4 className="text-4xl mb-10">Next steps to buying a house</h4>
          <p className="text-muted my-3">
            There are 8 steps to buying a house and by using this calculator you&apos;ve completed step 2 (calculating your home affordability) and maybe even step 1 (getting your finances in order).
          </p>
          <p className="text-muted my-3">The next step is getting pre-approved. A mortgage pre-approval with Better Mortgage takes as little as 3-minutes and doesn&apos;t impact your credit score. It&apos;s a free, no-commitment way to see how much home you can buy, the mortgages you qualify for, and the range of interest rates you&apos;ll be offered.</p>
          <p className="text-muted my-3">If you&apos;re ready to buy a home now, our definitive home buying checklist can walk you through everything you need to know to get the home you want. With your Better Mortgage pre-approval letter in hand, you&apos;ll be able to show sellers and real estate agents that you mean business—giving you an edge over homebuyers that don&apos;t have this kind of proof that they&apos;re financially ready to purchase. And by working with an agent from Better Real Estate and funding with Better Mortgage, you&apos;ll save $2,000 on closing costs, and save up to $8,200 on average over the life of your loan.**</p>
        </div>

        <div className="border-t border-black"></div>

        <div className="mb-5 mt-5">
          <h4 className="text-4xl mb-10">More resources</h4>

          <p className="text-muted my-3">*See Better Real Estate discount terms and conditions.</p>
          <p className="text-muted my-3">**The average lifetime savings estimate is based on a comparison of the Freddie Mac Primary Mortgage Market Survey&apos;s (PMMS) 30-year fixed-rate mortgage product with Better Mortgage&apos;s own offered rate for a comparable mortgage product between Jan &apos;20 - Dec &apos;20. PMMS is based on conventional, conforming fully-amortizing home purchase loans for borrowers with a loan-to-value of 80 percent and with excellent credit. Better Mortgage&apos;s offered rate is based on pricing output for a 30-year fixed-rate mortgage product with a 30-day lock period for a single-family, owner-occupied residential property and a borrower with excellent (760 FICO) credit and a loan-to-value ratio of 80 percent. Individual savings could vary based on current market rates, property type, loan amount, loan-to-value, credit score, debt-to-income ratio and other variables.</p>
        </div>
      </div>
    </div>
  );
};

export default CalculatorFAQSection;