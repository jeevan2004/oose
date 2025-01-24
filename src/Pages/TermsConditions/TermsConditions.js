import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import "./terms.css";

const TermsConditions = () => {
  return (
    <>
      <section class="text_content">
        <div class="container">
          <div class="">
            <h1 class="text-center">Terms of Use</h1>
            <p class="text-center">Last updated on October 1st 2023</p>

            <p>
              <b>
                PLEASE READ THE FOLLOWING TERMS AND CONDITIONS OF USE CAREFULLY
                BEFORE USING THIS WEBSITE AND APPLICATIONS.
              </b>
            </p>
            <p>
              All users of this site agree that access to and use of this site
              are subject to the following terms and conditions and other
              applicable laws. If you do not agree to these terms and
              conditions, please do not use this site and app.
            </p>
            <b>Disclaimer:</b>
            <p>
              You understand that it is your responsibility to provide valid
              information only after going through our privacy policy. We are
              not liable or responsible for any loss in communication due to
              invalid information provided while using our services.
              <br />
              Any form of communication, withholding of data and access to app
              will be at <a href="//www.pgmanager.in">pgmanager.in's</a> sole
              discretion.
            </p>
            <b>Copyright:</b>
            <p>
              This site's entire content, including but not limited to text,
              graphics or code, is copyrighted as a collective work under the
              Indian Copyrights Act and is the property of
              <a href="//www.pgmanager.in">pgmanager.in</a>. The collective work
              includes works that are licensed to
              <a href="//www.pgmanager.in">pgmanager.in</a>. Copyright 2017,
              pgmanager.in ALL RIGHTS RESERVED. Permission is granted to
              electronically copy and print hard copy portions of this site for
              the sole purpose of advertisement. Any other use, including but
              not limited to the reproduction, distribution, display or
              transmission of the content of this site is strictly prohibited
              unless authorized by
              <a href="//www.pgmanager.in">pgmanager.in</a>. You further agree
              not to change or delete any proprietary notices from materials
              downloaded from
              <a href="//www.pgmanager.in">pgmanager.in</a>.
            </p>

            <b>Warranty Disclaimer:</b>
            <p>
              This site and the materials and products on this site are provided
              "as is" and without warranties of any kind. To the fullest extent
              permissible pursuant to applicable law,
              <a href="//www.pgmanager.in">pgmanager.in</a> disclaims all
              warranties, express or implied, including, but not limited to,
              implied warranties of merchantability and fitness for a particular
              purpose and non-infringement.{" "}
              <a href="//www.pgmanager.in">pgmanager.in</a> does not represent
              or warrant that the functions contained in the site will be
              uninterrupted or error-free, that the defects will be corrected,
              or that this site or the server that makes the site available are
              free of viruses or other harmful components.
              <a href="//www.pgmanager.in">pgmanager.in</a> does not make any
              warranties or representations regarding the use of the materials
              in this site in terms of their correctness, accuracy, adequacy,
              usefulness, timeliness, reliability or otherwise. Some states do
              not permit limitations or exclusions on warranties, so the above
              limitations may not apply to you.
            </p>

            <b>Limitation of Liability:</b>
            <p>
              <a href="//www.pgmanager.in">pgmanager.in</a> shall not be liable
              for any special or consequential damages that result from the use
              of, or the inability to use, the services and products offered on
              this site or the performance of it's services and products.
            </p>

            <b>Termination:</b>
            <p>
              These terms and conditions are applicable to you upon your
              accessing the site and/or completing the registration or shopping
              process. These terms and conditions, or any part of them, may be
              terminated by
              <a href="//www.pgmanager.in">pgmanager.in</a> and Privacy Policy
              Services without notice at any time, for any reason. The
              provisions relating to Copyrights, Trademark, Disclaimer,
              Limitation of Liability, Indemnification and Miscellaneous shall
              survive any termination.
            </p>

            <b>Notice:</b>
            <p>
              <a href="//www.pgmanager.in">pgmanager.in</a> may deliver notice
              to you by means of an e-mail, a general notice on the site, or by
              another reliable method based on the contact information you have
              provided to
              <a href="//www.pgmanager.in">pgmanager.in</a>.
            </p>

            <b>Guarantees:</b>
            <p>
              <a href="//www.pgmanager.in">pgmanager.in</a> does not offer any
              form of data guarantee or 100% up time as this is subject to
              server statures and availability. However, we will try our best to
              provide an outstanding and best in class service. Any payments
              made online will be credited to the means provided by you within 7
              working days.
            </p>

            <b>Miscellaneous:</b>
            <p>
              Your use of this site shall be governed in all respects by the
              laws. You agree that jurisdiction over any venue in any legal
              proceeding directly or indirectly arising out of or relating to
              this site (including but not limited to the purchase of
              <a href="//www.pgmanager.in">pgmanager.in</a>'s products or
              services) shall be in the state or federal courts located in
              Bangalore, India. Any cause of action or claim you may have with
              respect to the site (including but not limited to the purchase of
              <a href="//www.pgmanager.in">pgmanager.in</a> products) must be
              commenced within one (1) year after the claim or cause of action
              arises.
              <a href="//www.pgmanager.in">pgmanager.in</a>'s failure to insist
              upon or enforce strict performance of any provision of these terms
              and conditions shall not be construed as a waiver of any provision
              or right. Neither the course of conduct between the parties nor
              trade practice's shall act to modify any of these terms and
              conditions.
              <a href="//www.pgmanager.in">pgmanager.in</a> may assign its
              rights and duties under this Agreement to any party at any time
              without notice to you.
            </p>

            <b>Use of Site:</b>
            <p>
              Harassment in any manner or form on the site, including via
              e-mail, chat, or by use of obscene or abusive language is strictly
              forbidden. Impersonation of others, including a
              <a href="//www.pgmanager.in">pgmanager.in</a> or other licensed
              employee, host, or representative, as well as other members or
              visitors on the site is prohibited. You may not upload,
              distribute, or otherwise publish through the site any content
              which is libelous, defamatory, obscene, threatening, invasive of
              privacy or publicity rights, abusive, illegal, or otherwise
              objectionable which may constitute or encourage a criminal
              offense, violate the rights of any party, or which may otherwise
              give rise to liability or violate any law. You may not upload
              commercial content on the site or use the site to solicit others
              to join or become members of any other commercial online service
              or other organization.
            </p>

            <b>Participation Disclaimer:</b>
            <p>
              <a href="//www.pgmanager.in">pgmanager.in</a> does not and cannot
              review all communications and materials posted to or created by
              users accessing the site and is not in any manner responsible for
              the content of these communications and materials. You acknowledge
              that by providing you with the ability to view and distribute
              user-generated content on the site,
              <a href="//www.pgmanager.in">pgmanager.in</a> is merely acting as
              a passive conduit for such distribution and is not undertaking any
              obligation or liability relating to any contents or activities on
              the site. However, <a href="//www.pgmanager.in">pgmanager.in</a>{" "}
              reserves the right to block or remove communications or materials
              that it determines to be (a) abusive, defamatory, or obscene, (b)
              fraudulent, deceptive, or misleading, (c) in violation of a
              copyright, trademark or other intellectual property right of
              another, or (d) offensive or otherwise unacceptable to
              <a href="//www.pgmanager.in">pgmanager.in</a> at its sole
              discretion.
            </p>

            <b>Indemnification:</b>
            <p>
              You agree to indemnify, defend, and hold harmless
              <a href="//www.pgmanager.in">pgmanager.in</a>, its officers,
              directors, employees, agents, licensors and suppliers
              (collectively the "Service Providers") from and against all
              losses, expenses, damages and costs, including reasonable
              attorney's fees, resulting from any violation of these terms and
              conditions or any activity related to your account (including
              negligent or wrongful conduct) by you or any other person
              accessing the site using your Internet account.
            </p>

            <b>Payment Policy:</b>
            <p>
              <strong>1. Role:</strong> Any registered User of PG Manager/PG
              Cloud may choose to make license payments, feature payments, rent
              payments, maintenance payments, payment of security deposit/ token
              amounts and booking amounts through the payment gateway(s)
              authorized by PG Manager/PG Cloud. In this regard, the Users are
              asked to provide customary billing information such as name,
              mobile number, financial instrument information which shall
              include the bank account number, IFSC code of the User, the
              details of the landlord to whom the payment has to be made and the
              address of the property with regard to which the rent or security
              deposit is to be paid. Users may also be asked to provide a copy
              of the rental agreement pursuant to which such rent payments are
              being made. The Users must provide accurate, current, and complete
              information while making the payment through the Site and it shall
              be the User’s obligation to keep this information up-to-date at
              all times. The Users are solely responsible for the accuracy and
              completeness of the information provided by them and PG Manager/PG
              Cloud shall not be responsible for any loss suffered by the User
              as a result of any incorrect information, including payment
              information provided by the Users.
            </p>
            <p>
              Except for PG Manager/PG Cloud’s limited role in processing the
              payments that registered Users authorize or initiate, PG
              Manager/PG Cloud is not involved in any underlying transaction
              between the User, any other User, any third person or any service
              providers. PG Manager/PG Cloud is not a bank and does not offer
              any banking or related services. PG Manager/PG Cloud may use the
              services of one or more third parties (each a "Processor") to
              provide the Service and process the User’s transactions. Further,
              PG Manager/PG Cloud does not guarantee payment on behalf of any
              registered User, other User or Processor and explicitly disclaims
              all liability for any act or omission of any User or Processor. PG
              Manager/PG Cloud is neither an agent of the lessor or lessee or
              any registered User. PG Manager/PG Cloud acts solely as an
              intermediary which facilitates payments between the registered
              Users making the payment and the intended third-party
              beneficiaries.
            </p>

            <p>
              <strong>2. Authorization:</strong> The User acknowledges that PG
              Manager/PG Cloud is authorized by the User to hold, receive and
              disburse funds in accordance with the User’s payment instructions
              provided through the Site for the purposes of facilitating the
              transfer of monies to the intended beneficiary as specified by the
              User on the Site . [The authorization given by the Users permits
              PG Manager/PG Cloud (a) to debit or credit the User’s balance,
              bank account, any credit card, debit card, or other payment cards
              or any other payment method that PG Manager/PG Cloud accepts] or
              (b) to process payment transactions that the Users authorize by
              generating an electronic funds transfer. [By instructing PG
              Manager/PG Cloud to pay another User, the Users authorize and
              order PG Manager/PG Cloud to make the payments (less any
              applicable fees or other amounts we may collect under this
              Agreement) to such user. PG Manager/PG Cloud may limit the
              recipient's ability to use or withdraw the committed funds for
              such period of time that PG Manager/PG Cloud has agreed to with
              the recipient.]
            </p>

            <p>
              <strong>3. Fees:</strong> The User agrees that they may be charged
              a service charge by PG Manager/PG Cloud for using the Site to make
              rental payments, payment of security deposits, maintenance
              payments and booking payments.
            </p>

            <p>
              <strong>4. Transaction Limits:</strong> PG Manager/PG Cloud may
              delay, suspend or reject a transaction for any payment(s) for any
              reason, including without limitation if PG Manager/PG Cloud
              suspects that the transaction subjects it to financial or security
              risk or is unauthorized, fraudulent, suspicious, unlawful, in
              violation of the terms of this Agreement subject to dispute or
              otherwise unusual.
            </p>

            <p>
              <strong>5. Chargebacks:</strong> The amount of a transaction may
              be charged back or reversed to the User (a "Chargeback") if the
              transaction (a) is disputed by the sender, (b) is reversed for any
              reason, (c) was not authorized or PG Manager/PG Cloud has reason
              to believe that the transaction was not authorized, or (d) is
              allegedly unlawful, suspicious, or in violation of the terms of
              this Agreement. The Users owe PG Manager/PG Cloud and will
              immediately pay PG Manager/PG Cloud the amount of any Chargeback
              and any associated fees, fines, or penalties assessed by PG
              Manager/PG Cloud’s Processor, processing financial institutions,
              or MasterCard, Visa, American Express, Discover, and other payment
              card networks, associations, or companies ("Networks"). The Users
              agree to assist PG Manager/PG Cloud when requested, at the User’s
              expense, to investigate any of the User’s transactions processed
              through the Service. For Chargebacks associated with cards, PG
              Manager/PG Cloud will work with the Users to contest the
              Chargeback with the Network or issuing banks should the User
              choose to contest the Chargeback. In this regard, PG Manager/PG
              Cloud will request necessary information from the User to contest
              the Chargeback and the User’s failure to timely assist PG
              Manager/PG Cloud in investigating a transaction, including without
              limitation providing necessary documentation within 5 business
              days of PG Manager/PG Cloud’s request, may result in an
              irreversible Chargeback.
            </p>

            <p>
              <strong>6. Liability:</strong> The Users agree not to hold PG
              Manager/PG Cloud responsible and/or liable for any issue or claim
              arising out of any dispute whatsoever between the User and the
              Processor and/or the User and the User’s bank or financial
              institution.
            </p>

            <p>
              Additionally, please note that PG Manager/PG Cloud shall not be
              responsible for any additional fees or charges deducted by the
              Processors while processing payments in connection with the User’s
              transaction and PG Manager/PG Cloud disclaims all liability in
              this regard. Further, the Users may also be subject to additional
              terms and conditions imposed by such Processors and the Users
              should review these terms and conditions before authorizing any
              payments through the Processors.
            </p>

            <p>
              <strong>7. Fraud and restrictions:</strong> PG Manager/PG Cloud
              may ask for additional documents (like Rental Agreement,
              Owner/Tenant PAN, Maintenance Bill) where it deems necessary,
              including in case the transaction looks suspicious. [PG Manager/PG
              Cloud will refund the full amount (excluding the nominal
              processing fees collected by PG Manager/PG Cloud) without any
              deductions if PG Manager/PG Cloud determines it is not a valid
              rent/token/security deposit/ maintenance payment or if such
              payment is fraudulent. A valid rent/security deposit payment is
              one where there exists a legally valid rental agreement between
              the tenant and the landlord with the rent amount equivalent to
              what is being transferred on PG Manager/PG Cloud Pay. A valid
              maintenance payment is one where there exists a maintenance bill
              between the payer and the society/RWA.
            </p>

            <p>
              <strong>8. Refund and Cancellation:</strong> License and Feature
              payments are non-refundable in any case. In case, PG Manager/PG
              Cloud is not able to facilitate the payments to the beneficiary
              account due to any technical difficulties, PG Manager/PG Cloud
              will refund the payment back to the source. Manual refund requests
              are entertained at the sole discretion of the target party of the
              payment. Booking payments once made can only be cancelled at the
              sole discretion of the target party. Upon approval of the target
              party, cancellation will be entertained and the booking amount
              will be refunded to the source of payment or otherwise advised.
            </p>

            <p>
              9. The Users acknowledge and agree that, to the maximum extent
              permitted by law, the entire risk arising out of the User’s access
              to and use of the payment Services remains with the Users. If the
              Users permit or authorize another person to use their PG
              Manager/PG Cloud account in any way, the Users shall be
              responsible for the actions taken by that person. Neither PG
              Manager/PG Cloud nor any other party or Processor involved in
              creating, producing, or delivering the payment Services will be
              liable for any incidental, special, exemplary, or consequential
              damages, including lost profits, loss of data or loss of goodwill,
              service interruption, computer damage or system failure or the
              cost of substitute products or services, or for any damages for
              personal or bodily injury or emotional distress arising out of or
              in connection with these payments terms.
            </p>

            <b>Shipping &amp; Delivery Policy:</b>
            <p>Shipping is not applicable for business.</p>

            <b>Contact Us:</b>
            <p>
              you can always reach us at{" "}
              <a href="mailto:support@oosaservices.com">
                support@oosaservices.com
              </a>{" "}
              and for any kind of support. Looking forward to see you mail!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
