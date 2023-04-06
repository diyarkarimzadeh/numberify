import Head from "next/head"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import styles from '../styles/home.module.scss'
import { Icons } from "@/components/icons"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Numberify</title>
        <meta
          name="description"
          content="Get a Temp Number; Fast, Secure, Low Cost"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container flex justify-center flex-col items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-center gap-2">
          <h1 className="text-3xl font-extrabold text-center leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-5xl">
            Get a Temp Number <br className="hidden sm:inline" /> Fast, Secure, Low Cost
          </h1>
          <p className="max-w-[700px] text-center text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            We offer Temp Numbers for most popular services which you can get one easily and use them without any need to use your real number.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href='/services'
            className={buttonVariants({ size: "lg" })}
          >
            Get Temp Number
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            How it works
          </Link>
        </div>

      </section>

      <section className={styles.features}>

        <div className={styles.features_item}>
          <Icons.fast className={styles.features_icon} />
          <h2 className={styles.features_h2}>Fast</h2>
          <p>Getting a temp number takes less than 5 minutes. <br className="hidden sm:inline" />Without any bullsh*t Sign Up</p>
        </div>
        <div className={styles.features_item}>
          <Icons.shield />
          <h2 className={styles.features_h2}>Secure</h2>
          <p>It's not secure to use your real phone number <br className="hidden sm:inline" /> for services you use so a Temp number is a <br className="hidden sm:inline" />more secure option</p>
        </div>
        <div className={styles.features_item}>
          <Icons.money />
          <h2 className={styles.features_h2}>Low Cost</h2>
          <p>It's very cheap to get a Temp Number, <br className="hidden sm:inline" /> Prices are diffrent base on service or location <br className="hidden sm:inline" /> but usually it's 2$ to 7$ range.</p>
        </div>

      </section>
    </Layout>
  )
}
