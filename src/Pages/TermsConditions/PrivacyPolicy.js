import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import "./terms.css";

const PrivacyPolicy = () => {
  return (
    <>
      <section class="text_content">
        <div class="container">
          <div class="">
            <h1 class="text-center">Privacy Policy</h1>
            <p>
              This policy applies to products PG Manager and PG Cloud of OOSA
              Services Private Limited, a partnership incorporated under the
              Companies Act, 1956 with its registered office at #1733, Ram
              Temple Road, Vijayapura, Bangalore - 562135, India.(collectively
              “PG Manager”, "PG Cloud", “we”, “our”, or “us” as the context may
              require).
              <br />
              This policy describes how PG Manager and PG Cloud collects,
              stores, uses and otherwise processes your Personal Information
              through our websites, Applications, m-sites, chatbots,
              notifications or any other medium used by us to provide its
              services to you (hereinafter referred to as the “Platform”). By
              visiting, downloading, using PG Manager Platform, and/or,
              providing your information or availing our product/services, you
              expressly agree to be bound by this Privacy Policy (“Policy”) and
              the applicable service/product terms and conditions. We value the
              trust you place in us and respect your privacy, maintaining the
              highest standards for secure transactions and protection of your
              personal information.
              <br />
              This Privacy Policy is published and shall be construed in
              accordance with the provisions of Indian laws and regulations
              including the Information Technology (Reasonable Security
              Practices and Procedures and Sensitive Personal Data or
              Information) Rules, 2011 under the Information Technology Act,
              2000, the Aadhaar Act, 2016 and its Amendments, including the
              Aadhaar Regulations; that require publishing of the privacy policy
              for collection, use, storage, transfer, disclosure of Personal
              Information. Personal Information means and includes all
              information that can be linked to a specific individual and also
              includes Sensitive Personal Information (all Personal Information
              which requires heightened data protection measures due to its
              sensitive and personal nature), both, hereinafter referred to as
              “Personal Information”, excluding any information that is freely
              available or accessible in public domain. Please note, we do not
              offer any product/service under our Platform outside India. If you
              do not agree with this Privacy Policy, please do not use or access
              our Platform.
            </p>
            <br />
            <p>
              This privacy policy has been compiled to better serve those who
              are concerned with how their 'Personally Identifiable Information'
              (PII) is being used online. PII, as described in privacy law and
              information security, is information that can be used on its own
              or with other information to identify, contact, or locate a single
              person, or to identify an individual in context. Please read our
              privacy policy carefully to get a clear understanding of how we
              collect, use, protect or otherwise handle your Personally
              Identifiable Information in accordance with our website.
            </p>

            <b class="qstn">
              What personal information do we collect from the people that visit
              our blog, website or app?
            </b>
            <p>
              We may collect your Personal Information when you use our services
              or Platform or otherwise interact with us during the course of our
              relationship. We collect Personal Information which is relevant
              and absolutely necessary for providing the services requested by
              you and to continually improve the PG Manager and PG Cloud
              Platform.
            </p>
            <br />
            <p>
              Personal and Sensitive Personal Information collected, as
              applicable, includes, but are not limited to:
            </p>
            <ul>
              <li>
                name, age, gender, photo, address, phone number, e-mail id,
                address, your contacts, workplace, references and their phone
                number
              </li>
              <li>
                PAN card number, KYC related information such as videos or other
                online/ offline verification documents as mandated by relevant
                regulatory authorities, your business-related information
              </li>
              <li>
                Aadhaar information including Aadhaar number or Virtual ID for
                the purposes of e-KYC authentication with the Unique
                Identification Authority of India (UIDAI). Note that submission
                of Aadhaar information is not mandatory for e-KYC
                authentication, you can also use other types of information,
                such as your PAN or GST number
              </li>
              <li>OTP sent to you by your bank or PG Manager</li>
              <li>wallet balance, wallet transaction history</li>
              <li>
                your device details such as device identifier, internet
                bandwidth, mobile device model, browser plug-ins, and cookies or
                similar technologies that may identify your browser/PG
                Manager/PG Cloud applications and plug-ins, and time spent, IP
                address and location, activity logs
              </li>
            </ul>
            <p></p>
            <br />
            <p>
              In addition to your information, you might be asked to provide the
              same set of information of your tenants/inmates like name, email
              address, phone number, address, workplace for which you will be
              solely responsible unless your users accept and are aware of our
              privacy policies.
            </p>

            <b class="qstn">When do we collect information?</b>
            <p>
              Information may be collected at various stages of your usage of
              our Platform such as:
            </p>
            <ul>
              <li>
                visiting PG Manager and PG Cloud platform[either apps or
                wibsite]
              </li>
              <li>
                registering on PG Manager and PG Cloud Platform as an
                “user/owner” or “tenant/inmate” or any other relationship that
                may be governed by terms and conditions listed on PG Manager and
                PG Cloud Platform
              </li>
              <li>
                accessing links, e-mails, chat conversations, feedbacks,
                notifications sent or owned by PG Manager and PG Cloud Platform
                and if you opt to participate in our occasional surveys
              </li>
              <li>
                otherwise dealing with any of the PG Manager
                Entities/Subsidiaries
              </li>
              <li>while applying for career opportunities with PG Manager</li>
            </ul>
            <p></p>
            <br />
            <p>
              We and our service providers or business partners may also collect
              your Personal Information from third parties or information made
              publicly available, as applicable, including but not limited to:
            </p>
            <ul>
              <li>
                your resume, your past employment and educational qualification
                for background checks and verifications, through online or
                offline databases that are otherwise legitimately obtained in
                case you apply for employment opportunities with PG Manager or
                during police verifications
              </li>
              <li>
                your demographic and photo information including but not limited
                to Aadhaar number, address, gender, and date of birth as a
                response received from UIDAI upon successful Aadhaar e-KYC
              </li>
            </ul>
            <p></p>

            <b class="qstn">How do we use your information?</b>
            <p>
              We may use the information we collect from you when you register,
              make a purchase, sign up for our newsletter, respond to a survey
              or marketing communication, surf the website, or use certain other
              site features in the following ways:
            </p>
            <ul>
              <li>
                creation of your account and verification of your identity and
                access privileges
              </li>
              <li>
                provide you access to the products and services being offered by
                us, merchants, entities, subsidiaries, sellers, logistic
                partners, or business partners
              </li>
              <li>
                to allow us to better service you in responding to your customer
                service requests
              </li>
              <li>
                to conduct the KYC compliance process as a mandatory
                prerequisite as per the requirements of various regulatory
                bodies, including UIDAI under the Aadhaar Act and its
                Regulations
              </li>
              <li>
                to validate, process and/or share your KYC information, nominee
                details with other intermediaries, Regulated Entities (REs) or
                AMCs or financial institutions or with any other service
                providers as may be required
              </li>
              <li>
                to process payments on your behalf and on your instructions;
                communicate with you for your queries, transactions, and/or any
                other regulatory requirement, etc.
              </li>
              <li>
                to authenticate a transaction request; confirming a payment made
                via the services
              </li>
              <li>
                enhancing your user experience in various processes/submission
                of applications/availment of product/service offerings by
                analysing user behaviour on an aggregated basis
              </li>
              <li>
                to monitor and review products/services from time to time;
                customize the services to make your experience safer and easier,
                and conducting audits
              </li>
              <li>
                to allow third parties to contact you for products and services
                availed/requested by you on our Platform or third-party links
              </li>
              <li>
                to inform you about online and offline offers, products,
                services, and updates; customizing and improving your experience
                by marketing, presenting advertising, and offering tailored
                products and offers
              </li>
              <li>
                to resolve disputes; troubleshoot problems; technical support
                and fixing bugs; help promote a safe service
              </li>
              <li>
                to identify security breaches and attacks; investigating,
                preventing, and taking action on illegal or suspected fraud or
                money laundering activities and conducting forensic audits as
                part of internal or external audit or investigation by us or
                government agencies located within India or outside the Indian
                jurisdiction
              </li>
              <li>to ask for ratings and reviews of services or products</li>
              <li>to run adds for you on our listing site</li>
              <li>to meet legal obligations</li>
            </ul>
            <br />
            <p>
              Please note that when providing you with account aggregator
              services, we do not store, use, process, or have access to any
              financial information that you choose to transmit under our
              services.
            </p>

            <b class="qstn">Information Sharing and Disclosures</b>
            <p>
              <br />
              Your Personal Information is shared as allowed under applicable
              laws, after following due diligence and in line with the purposes
              set out in this Policy. <br />
              We may share your Personal Information in the course of your
              transaction with different categories of recipients such as
              business partners, service providers, sellers, logistic partners,
              merchants, entities, subsidiaries, legally recognized authorities,
              regulatory bodies, governmental authorities, financial
              institutions, internal teams such as marketing, security,
              investigation team, etc.
            </p>
            <br />
            <p>
              Personal Information will be shared, as applicable, on
              need-to-know basis, for the following purposes:
            </p>
            <ul>
              <li>
                for enabling the provision of the products/services availed by
                you and facilitating the services between you and the service
                provider, sellers, logistic partners, as requested
              </li>
              <li>
                for the Aadhaar authentication process by submitting Aadhaar
                information to Central Identities Data Repository (CIDR)
              </li>
              <li>
                for complying with applicable laws as well as meeting the Know
                Your Customer (KYC) requirements as mandated by various
                regulatory bodies, whose regulated service/product you opt
                through our services/Platforms
              </li>
              <li>
                for completing a payment transaction initiated by you on a
                merchant site, where based on your instructions, the merchant
                requests to fetch your Personal Information from us
              </li>
              <li>
                if it is required by financial institutions to verify, mitigate,
                or prevent fraud or to manage risk or recover funds in
                accordance with applicable laws/regulations
              </li>
              <li>
                for services related to communication, marketing, data and
                information storage, transmission, security, analytics, fraud
                detection, risk assessment and research
              </li>
              <li>
                enforce our Terms or Privacy Policy; respond to claims that an
                advertisement, posting, or other content violates the rights of
                a third party; or protect the rights, property or personal
                safety of our users or the general public
              </li>
              <li>
                if required to do so by law or in good faith we believe that
                such disclosure is reasonably necessary to respond to subpoenas,
                court orders, or other legal process
              </li>
              <li>
                if requested by government authorities for government
                initiatives and benefits
              </li>
              <li>for grievance redressal and resolution of disputes</li>
              <li>
                with the internal investigation department within Conceptive
                Minds LLP or agencies appointed by OOSA Services Private Limited
                for investigation purposes located within or outside the Indian
                jurisdiction
              </li>
              <li>
                should we (or our assets) plan to merge with, or be acquired by
                any business entity, or re-organization, amalgamation,
                restructuring of our business then with such other business
                entity
              </li>
              <li>
                with SAM and Payment service providers in order to facilitate
                registration, online payments etc
              </li>
            </ul>
            <p></p>
            <br />
            <p>
              While the information is shared with third parties as per purposes
              set out in this Policy, processing of your Personal Information is
              governed by their policies. We ensure stricter or no less
              stringent privacy protection obligations are cast on these
              third-parties, wherever applicable and to the extent possible.
              However, we may share Personal Information with third-parties such
              as legally recognized authorities, regulatory bodies, governmental
              authorities, and financial institutions as per purposes set out in
              this Policy or as per applicable laws. We do not accept any
              responsibility or liability for usage of your Personal Information
              by these third parties or their policies.
            </p>

            <b class="qstn">Storage and Data Retention</b>
            <p>
              To the extent applicable, we store Personal Information within
              India and retain it in accordance with applicable laws and for a
              period no longer than it is required for the purpose for which it
              was collected. However, we may retain Personal Information related
              to you if we believe it may be necessary to prevent fraud or
              future abuse or if required by law such as in the event of the
              pendency of any legal/regulatory proceeding or receipt of any
              legal and/or regulatory direction to that effect or for other
              legitimate purposes.
              <br />
              Once the Personal Information has reached its retention period, it
              shall be deleted in compliance with applicable laws.
            </p>

            <b class="qstn">How do we protect your information?</b>
            <p>
              We have deployed administrative, technical, and physical security
              measures to safeguard user’s Personal Information and Sensitive
              Personal Information. Specifically, in order to safeguard your
              Aadhaar information, we have implemented applicable security
              controls as given under and required by the Aadhaar Regulations.
              We understand that as effective as our security measures are, no
              security system is impenetrable. Hence, as part of our reasonable
              security practices, we undergo strict internal and external
              reviews to ensure appropriate information security encryption or
              controls are placed for both data in motion and data at rest
              within our network and servers respectively. The database is
              stored on servers secured behind a firewall; access to the servers
              is password-protected and is strictly limited.
              <br />
              Further, you are responsible for maintaining the confidentiality
              and security of your login id and password. Please do not share
              your login, password, and OTP details with anybody. It shall be
              your responsibility to intimate us in case of any actual or
              suspected compromise to your Personal Information.
              <br />
              We have provided multiple levels of security to safeguard the PG
              Manager Application by login/logout option and PG Manager
              Application lock feature (“Biometric Authentication”) that can be
              enabled by you. We have preventive controls implemented to ensure
              you use PG Manager Application on your device and the same login
              credentials cannot be used on different device without any
              additional authentication/OTP.
            </p>
            <br />
            <p>
              Our website is scanned on a regular basis for security holes and
              known vulnerabilities in order to make your visit to our site as
              safe as possible. <br />
              We use regular Malware Scanning. <br />
              We use a standard SSL certificate. Henceforth all the data
              transmitted over internet is encrypted.
            </p>

            <b class="qstn">Do we use 'cookies'?</b>
            <p>
              We use cookies for tracking purposes. <br />
              You can choose to have your computer warn you each time a cookie
              is being sent, or you can choose to turn off all cookies. You do
              this through your browser settings. Since browser is a little
              different, look at your browser's help menu to learn the correct
              way to modify your cookies. <br />
              If you turn cookies off, Some of the features that make your site
              experience more efficient may not function properly.
            </p>

            <b class="qstn">Third-party disclosure</b>
            <p>
              When you are availing products and services of service providers
              on our Platform, Personal Information may be collected by
              respective service providers and such Personal Information shall
              be governed by their privacy policy. You may refer to their
              privacy policy and terms of service to understand how your
              Personal Information will be handled by such service providers.
              <br />
              Our services may include links to other websites or applications
              when you visit our Platform. Such websites or applications are
              governed by their respective privacy policies, which are beyond
              our control. Once you leave our servers (you can tell where you
              are by checking the URL in the location bar on your browser or on
              the m-site you are redirected to), use of any Personal Information
              that you provide on these websites or applications is governed by
              the privacy policy of the operator of the application/website, you
              are visiting. That policy may differ from ours and you are
              requested to review those policies or seek access to the policies
              from the domain owner before proceeding to use those applications
              or websites. We do not accept any responsibility or liability for
              usage of your Personal Information by these third parties or their
              policies.
              <br />
              <strong>
                We do not sell, or otherwise trade to outside parties your
                Personally Identifiable Information.
              </strong>
            </p>

            <b class="qstn">Third-party links</b>
            <p>
              We may include or offer third-party products or services on our
              website.
            </p>

            <b class="qstn">We have implemented the following</b>
            <ul>
              <li>Demographics and Interests Reporting</li>
            </ul>
            <p>
              We, along with third-party vendors such as Google use first-party
              cookies (such as the Google Analytics cookies) and third-party
              cookies (such as the DoubleClick cookie) or other third-party
              identifiers together to compile data regarding user interactions
              with ad impressions and other ad service functions as they relate
              to our website.
            </p>

            <b class="qstn">Your Consent</b>
            <p>
              We process your Personal Information with consent. By using our
              Platform or services and/or by providing your Personal
              Information, you consent to the processing of your Personal
              Information by PG Manager and PG Cloud in accordance with this
              Privacy Policy. If you disclose to us any Personal Information
              relating to other people, you represent that you have the
              authority to do so and permit us to use the information in
              accordance with this Privacy Policy.
            </p>

            <b class="qstn">Opting out</b>
            <p>
              We provide all users with the opportunity to opt-out of receiving
              any of our services or non-essential (promotional,
              marketing-related) communications from us, after setting up an
              account. If you want to remove your contact information from all
              our lists and newsletters or discontinue any our services, please
              click on the unsubscribe button on the emailers and/or contact us
              over email on support@pgmanager.in
            </p>

            <b class="qstn">
              According to online privacy protection law, we agree to the
              following
            </b>
            <p>
              Users can visit our site anonymously.
              <br />
              Once this privacy policy is created, we will add a link to it on
              our home page or as a minimum, on the first significant page after
              entering our website. <br />
              Our Privacy Policy link includes the word 'Privacy' and can easily
              be found on the page specified above.
            </p>

            <b class="qstn">
              Personal Information Access/Rectification and Consent
            </b>
            <p>
              You can access and review your Personal Information shared by you
              by placing a request with us. In addition, you may at any time
              revoke consent given to us to store your e-KYC information,
              collected as part of the Aadhaar-based e-KYC process. Upon such
              revocation, you may lose access to services that were availed on
              the basis of the consent provided. In some cases, we may continue
              to retain your information as per the ‘Storage and Retention’
              section of this Policy. To raise any of the above requests, you
              may write to us using the contact information provided under the
              ‘Contact Us’ section of this Policy.
              <br />
              In case you wish to delete your account or Personal Information,
              please use the ‘Profile’ section of the PG Manager Platform.
              However, retention of your Personal Information will be subject to
              applicable laws.
              <br />
              For the above requests, we may need to request specific
              information from you to confirm your identity and ensure
              authentication. This is a security measure to ensure that Personal
              Information is not disclosed to any person who does not have a
              right to receive it or is not incorrectly modified or deleted.
              <br />
              In cases where you need any further information specific to the
              product/ services that you are availing, we request you to read
              through the Terms and Conditions specific to the product/service
              which is easily accessible through our Platform. For seeking any
              further information on the same, you can write to us at the
              details mentioned in the ‘Contact Us’ section of this Policy.
            </p>

            <b class="qstn">Children Information</b>
            <p>
              We do not knowingly solicit or collect Personal Information from
              children under the age of 18 and use of our Platform is available
              only to persons who can form a legally binding contract under the
              Indian Contract Act, 1872. If you are under the age of 18 years
              then you must use the Platform or services under the supervision
              of your parent, legal guardian, or any responsible adult.
            </p>

            <b class="qstn">Policy changes</b>
            <p>
              Since our business changes constantly, so will our policies. We
              reserve the right, at our sole discretion, to change, modify, add,
              or remove portions of this Privacy Policy at any time without any
              prior written notice to you. We may, however, reasonably endeavour
              to notify you of the changes, it is your responsibility to review
              the Privacy Policy periodically for updates/changes. Your
              continued use of our services/Platform, following the posting of
              changes will mean that you accept and agree to the revisions. We
              will never make changes to policies in order to make it less
              protective of Personal Information already shared by you.
            </p>

            <b class="qstn">How does our site handle Do Not Track signals?</b>
            <p>
              We honor Do Not Track signals and Do Not Track, plant cookies, or
              use advertising when a Do Not Track (DNT) browser mechanism is in
              place.
            </p>

            <b class="qstn">
              Does our site allow third-party behavioral tracking?
            </b>
            <p>
              It's also important to note that we do not allow third-party
              behavioral tracking.
            </p>

            <b class="qstn">
              In order to be in line with Fair Information Practices we will
              take the following responsive action, should a data breach occur
            </b>
            <p style={{ marginBottom: "0px" }}>
              We will notify you via email within 7 business days
            </p>
            <p style={{ marginBottom: "0px" }}>
              We will notify the users via in-site notification within 7
              business days
            </p>
            <p style={{ marginBottom: "0px" }}>
              We also agree to the Individual Redress Principle which requires
              that individuals have the right to legally pursue enforceable
              rights against data collectors and processors who fail to adhere
              to the law. This principle requires not only that individuals have
              enforceable rights against data users, but also that individuals
              have recourse to courts or government agencies to investigate
              and/or prosecute non-compliance by data processors.
            </p>
            <br />
            <b class="qstn">CAN SPAM Act</b>
            <p>
              The CAN-SPAM Act is a law that sets the rules for commercial
              email, establishes requirements for commercial messages, gives
              recipients the right to have emails stopped from being sent to
              them, and spells out tough penalties for violations.
            </p>

            <b class="qstn">
              To be in accordance with CANSPAM, we agree to the following:
            </b>
            <ul>
              <li>Not use false or misleading subjects or email addresses.</li>
              <li>
                Identify the message as an advertisement in some reasonable way.
              </li>
              <li>
                Include the physical address of our business or site
                headquarters.
              </li>
              <li>
                Monitor third-party email marketing services for compliance, if
                one is used.
              </li>
              <li>Honor opt-out/unsubscribe requests quickly.</li>
              <li>
                Allow users to unsubscribe by using the link at the bottom of
                each email.
              </li>
            </ul>
            <br />

            <b class="qstn">
              If at any time you would like to unsubscribe from receiving future
              emails, you can email us at
              <a href="mailto:support@pgmanager.in">support@pgmanager.in</a>
            </b>
            <ul>
              <li>Follow the instructions at the bottom of each email.</li>
            </ul>
            <p>and we will promptly remove you from ALL correspondence.</p>

            <b class="qstn">Contact Us</b>
            <p style={{ marginBottom: "0px" }}>
              If there are any questions regarding this privacy policy, you may
              contact us using the information below.
            </p>
            <ul>
              <li>
                <a href="mailto:support@oosaservices.com">
                  support@oosaservices.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
