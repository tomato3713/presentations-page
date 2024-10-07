import Data from "./assets/list.json";

const Title: React.FC<{ title: string }> = ({ title }) => {
  return <h4 className="text-lg">{title}</h4>;
};

type Proposal = {
  id: number;
  title: string;
  url: string;
  ogimage: string;
  event: {
    date: string;
  };
};

type ProposalListProps = Readonly<{
  proposals: Proposal[];
}>;
const ProposalList: React.FC<ProposalListProps> = ({
  proposals,
}: ProposalListProps) => {
  return (
    <div className="flex gap-4">
      {proposals.map((slide: Proposal) => {
        return (
          <article key={slide.id} className="flex-initial">
            <a href={slide.url} target="_blank">
              <img src={slide.ogimage} alt={slide.title} loading="lazy" />
            </a>
            <Title title={slide.title} />
            <p>{slide.event.date}</p>
          </article>
        );
      })}
    </div>
  );
};

function App() {
  const slides = Data.proposal;

  return (
    <>
      <div className="m-1">
        <h1 className="font-lg font-mono">Presentations</h1>
        <ProposalList proposals={slides} />
      </div>
    </>
  );
}

export default App;
