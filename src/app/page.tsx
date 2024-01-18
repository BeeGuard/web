import Image from "next/image";

export default function Home() {
    return (
        <main>
            <p>Hello</p>
            <Image
                src={'/shield.svg'}
                alt={'shield'}
                width={100}
                height={100}
            />
        </main>
    )
}