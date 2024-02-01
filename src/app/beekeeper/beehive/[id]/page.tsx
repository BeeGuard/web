import './page.css';

export default function Beehive({ params }: { params: { id: string } }) {

    return (
        <main>
            {params.id}
        </main>
    )
}