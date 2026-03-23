import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Meta Tags */}
          <meta name="description" content="A comprehensive guide on Crypto Hedge Funds and investment strategies." />
          <meta name="keywords" content="crypto, hedge funds, investment, cryptocurrency" />
          <meta name="author" content="Makrisjd" />

          {/* Open Graph Tags */}
          <meta property="og:title" content="Crypto Hedge Guide" />
          <meta property="og:description" content="A comprehensive guide on Crypto Hedge Funds and investment strategies." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://example.com" />
          <meta property="og:image" content="https://example.com/image.jpg" />

          {/* Structured Data */}
          <script type="application/ld+json">
          {`{ 
            "@context": "http://schema.org", 
            "@type": "WebSite", 
            "name": "Crypto Hedge Guide", 
            "url": "https://example.com" 
          }`} 
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;