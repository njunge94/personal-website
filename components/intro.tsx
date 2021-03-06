type Props = {
  children: string;
};

const Intro = ({ children }: Props) => (
  <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
      {children}
    </h1>
  </section>
);

export default Intro;
