import Head from 'next/head'
import Benefits from '../blocks/Benefits';
import Break from '../blocks/Break';
import Epilogue from '../blocks/Epilogue';
import Features from '../blocks/Features';
import Footer from '../blocks/Footer';
import Header from '../blocks/Header';
import Hero from '../blocks/Hero';
import Highlights from '../blocks/Highlights';
import Notice from '../components/Notice';
import * as Global from '../global/global.json';

const LOREM = `
  Are you looking to make a mark in entertainment industry? Lets start shopping with us
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>FridayWallet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Notice id="subscribed">Thank you for joining us</Notice>
      <Header id="top" title="FridayWallet"/>

      <main>
        <Hero
          title="Friday Wallet- Your Entertainment Partner"
          subtitle="Play with unlimited games, music with CryptoCurrency wallet"
          illustration=""
          subscribePlaceholder="you@email.com"
          subscribeAction="Subscribe Now!"
        />

        <Benefits
          background="alternate"
          title="Our Features"
          subtitle="Lets try new way of entertainment in crypto world"
          benefits={[
            {illustration:'', title:'Unlimited Access to games, widget', text:'You get instant accecss to premium contents'},
            {illustration:'', title:'Currency Exchange', text:'Exchange money with your already payment options'},
            {illustration:'', title:'Discount on shopping', text:'Buy or sell things from marketplace'},
          ]}
        />

        <Break
          title="Our Deals"
          subtitle="Start using wallet, get 5 per cent discount on shopping now"
          illustration=""
          action="Are you ready to get started?"
          onActionClick={() => window.scrollTo({top:99999, behavior:'smooth'})}
        />

        <Highlights
          title="Our Products"
          subtitle="We bring you different wallets for your needs"
          highlights={[
            {illustration:'Pro Version', title:'Bitcon Wallet', text:'???Forget any hidden charge,enjoy our offer'},
            {illustration:'Advanced Version', title:'Ethereum Wallet', text:'???Forget any hidden charge,enjoy our offer'},
          ]}
        />

        <Features
          background="alternate"
          title="Our Pricing "
          subtitle="We bring you the cheaper pricing options"
          features={[
            {illustration:'', title:'Basic', text:'Start shopping now, no hidden change with basic plan'},
            {illustration:'', title:'Advanced', text:'Get discount on access to selected widget, games'},
            
          ]}
        />

        <Epilogue
          title="Schedule a conference with us?"
          subtitle="Are you interested to sit with us to discuss your idea for business solutions?"
          illustration=""
          subscribePlaceholder="you@email.com"
          subscribeAction="Schedule a conference"
        />
      </main>

      <Footer
        title="Friday Wallet"
      />
    </div>
  )
}
