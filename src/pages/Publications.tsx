import { FileText, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Publications = () => {
  const publications = [
    {
      "title": "Adaptive policy for load frequency control",
      "authors": "S Hanwate, YV Hote, S Saxena",
      "journal": "IEEE Transactions on Power Systems",
      "year": "2017",
      "type": "Journal",
      "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=X9XdNlIAAAAJ&citation_for_view=X9XdNlIAAAAJ:Tyk-4Ss8FVUC"
    },
    {
      "title": "Optimal PID design for Load frequency control using QRAWCP approach",
      "authors": "SD Hanwate, YV Hote",
      "journal": "IFAC-PapersOnLine",
      "year": "2018",
      "type": "Conference Paper",
      "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=X9XdNlIAAAAJ&citation_for_view=X9XdNlIAAAAJ:W7OEmFMy1HYC"
    },
    {
      "title": "Design of PID controller for sun tracker system using QRAWCP approach",
      "authors": "SD Hanwate, YV Hote",
      "journal": "International Journal of Computational Intelligence Systems",
      "year": "2018",
      "type": "Journal",
      "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=X9XdNlIAAAAJ&citation_for_view=X9XdNlIAAAAJ:Y0pCki6q_DkC"
    },
    {
      "title": "Design of PID controller for inverted pendulum using stability boundary locus",
      "authors": "SD Hanwate, YV Hote",
      "journal": "2014 annual IEEE India conference (INDICON)",
      "year": "2014",
      "type": "Conference Paper",
      "link": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=X9XdNlIAAAAJ"
    },
    {
      "title": "Design and implementation of adaptive control logic for cart-inverted pendulum system",
      "authors": "S Hanwate, YV Hote, A Budhraja",
      "journal": "Proceedings of the Institution of Mechanical Engineers, Part I: Journal of …",
      "year": "2019",
      "type": "Journal",
      "link": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=X9XdNlIAAAAJ"
    },
    {
      "title": "Analysis of practical non-minimum phase systems by transfer function approach",
      "authors": "S Bose, YV Hote, SD Hanwate",
      "journal": "2018 4th International Conference on Electrical Energy Systems (ICEES)",
      "year": "2018",
      "type": "Conference Paper",
      "link": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=X9XdNlIAAAAJ"
    },
    {
      "title": "Improved performance of cart inverted pendulum system using LQR based PID controller and ANN",
      "authors": "SD Hanwate, A Budhraja, YV Hote",
      "journal": "2015 IEEE UP section conference on electrical computer and electronics …",
      "year": "2015",
      "type": "Conference Paper",
      "link": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=X9XdNlIAAAAJ"
    },
    {
      "title": "Relative stability analysis of perturbed cart inverted pendulum: An experimental approach",
      "authors": "S Hanwate, YV Hote",
      "journal": "IETE Technical Review",
      "year": "2018",
      "type": "Journal",
      "link": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=X9XdNlIAAAAJ"
    },
    {
      "title": "Analysis of effects due to right half plane zeros in pi controller based hydro turbine",
      "authors": "S Bose, YV Hote, SD Hanwate",
      "journal": "IFAC-PapersOnLine",
      "year": "2018",
      "type": "Conference Paper",
      "link": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=X9XdNlIAAAAJ"
    },
    {
      "title": "Analysis of PSO-PID controller for CSTR temperature control",
      "authors": "P Deulkar, S Hanwate",
      "journal": "2020 IEEE First International Conference on Smart Technologies for Power …",
      "year": "2020",
      "type": "Conference Paper",
      "link": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=X9XdNlIAAAAJ"
    },
    {
      "title": "Modelling and simulation of Quadruple Tank system using SBL-PI controller",
      "authors": "P Shah, S Hanwate",
      "journal": "2020 International Conference on Industry 4.0 Technology (I4Tech)",
      "year": "2020",
      "type": "Conference Paper",
      "link": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=X9XdNlIAAAAJ"
    },
    {
      "title": "Yaw rate and sideslip angle control of active 4WS using a two-time scale based novel sliding mode control",
      "authors": "P Aware, S Hanwate, V Wanaskar",
      "journal": "2021 5th international conference on intelligent computing and control …",
      "year": "2021",
      "type": "Conference Paper",
      "link": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=X9XdNlIAAAAJ"
    },
    {
      "title": "Analysis of adverse effects due to zeros in non-minimum phase discrete-time linear systems",
      "authors": "S Bose, YV Hote, SD Hanwate",
      "journal": "2017 14th IEEE India Council International Conference (INDICON)",
      "year": "2017",
      "type": "Conference Paper",
      "link": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=X9XdNlIAAAAJ"
    },
    {
      "title": "Study Of Designing Regulator Systems By Using The Different Observer Approach.",
      "authors": "R Bhalerao, S Hanwate",
      "journal": "IOSR Journal of Electrical and Electronics Engineering",
      "year": "2012",
      "type": "Journal",
      "link": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=X9XdNlIAAAAJ"
    },
    {
      "title": "A disturbance observer-based sliding mode control for Yawrate and sideslip angle control of four-wheel steering vehicle",
      "authors": "R Pendkar, S Hanwate",
      "journal": "2021 5th international conference on intelligent computing and control …",
      "year": "2021",
      "type": "Conference Paper",
      "link": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=X9XdNlIAAAAJ"
    },
    {
      "title": "Analysis of initial undershoot in step response of type-1 nonminimum phase systems",
      "authors": "S Bose, YV Hote, S Hanwate",
      "journal": "2019 IEEE Region 10 Symposium (TENSYMP)",
      "year": "2019",
      "type": "Conference Paper",
      "link": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=X9XdNlIAAAAJ"
    },
    {
      "title": "Hardware Implementation of BPSK System on Virtex2-Pro FPGA Using Xilinx System Generator",
      "authors": "CJ Harsha, SD Hanwate, AS Mali",
      "journal": null,
      "year": "2013",
      "type": "Journal",
      "link": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=X9XdNlIAAAAJ"
    },
    {
      "title": "Design a Robust Controller for BLDC speed control",
      "authors": "S Hanwate, A Ahuja, P Khare",
      "journal": "2022 6th International Conference On Computing, Communication, Control And …",
      "year": "2022",
      "type": "Conference Paper",
      "link": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=X9XdNlIAAAAJ"
    },
    {
      "title": "An Interactive and Dynamic MATLAB GUI for Design and Analysis of Modern Control Systems",
      "authors": "A Paharia, YV Hote, SD Hanwate",
      "journal": "2022 IEEE 17th International Conference on Control & Automation (ICCA)",
      "year": "2022",
      "type": "Conference Paper",
      "link": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=X9XdNlIAAAAJ"
    },
    {
      "title": "Robust Fuzzy Quasi-SMC-Based Steering Control of Autonomous Vehicle Subject to Parametric Uncertainties and Disturbances",
      "authors": "RM Shet, GV Lakhekar, NC Iyer, SD Hanwate",
      "journal": "International Journal of Automotive Technology",
      "year": "2024",
      "type": "Journal",
      "link": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=X9XdNlIAAAAJ"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Publications</span> & Research
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our latest research contributions and academic publications in drone technology
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="card-tech text-center">
            <div className="text-4xl font-bold text-gradient mb-2">30+</div>
            <p className="text-muted-foreground">Published Papers</p>
          </div>
          <div className="card-tech text-center">
            <div className="text-4xl font-bold text-gradient mb-2">8</div>
            <p className="text-muted-foreground">Conference Presentations</p>
          </div>
          <div className="card-tech text-center">
            <div className="text-4xl font-bold text-gradient mb-2">3</div>
            <p className="text-muted-foreground">Patent Applications</p>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Recent Publications</h2>
          {publications.map((publication, index) => (
            <div
              key={index}
              className="card-tech group hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-primary" />
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {publication.type}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{publication.year}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {publication.title}
              </h3>

              <p className="text-muted-foreground mb-2">{publication.authors}</p>
              <p className="text-sm text-muted-foreground mb-4 italic">{publication.journal}</p>

              <Link to={publication.link} target='_blank' className="group/btn flex items-center">
                View Publication
                <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;