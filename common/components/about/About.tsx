import { GraphData } from "@antv/g6";
import { useRouter } from "next/dist/client/router";
import React, { ReactElement, useEffect, useState } from "react";
import GraphComponent from "../graph/Graph";
import {
  GraphCollapseHelper,
  GraphCollapseTypeEnum,
} from "../graph/GraphCollapseHelper";

interface Props {}

const initialData = {
  nodes: [
    { id: "about", label: "Ben Chomsang" },
    { id: "skills", label: "Skills" },
    { id: "careers", label: "Careers" },
    { id: "beSciDataSci", label: "Behavioural Data Science" },
    { id: "softwareEngineering", label: "Software Engineering" },
    { id: "edu", label: "Education" },
    { id: "undergrad", label: "Undergraduate" },
    { id: "postgrad", label: "Postgraduate" },
    { id: "rochester", label: "University of Rochester" },
    { id: "warwick", label: "University of Warwick" },
    { id: "psych", label: "BA. Psychology" },
    { id: "film", label: "BA. Film and Media studies" },
    { id: "beSciAndDataSci", label: "MSc. Behavioural and Data Science\n (Graduated with Distinction)" },
    { id: "contact", label: "Contact" },
    { id: "email", label: "benchomsang@protonmail.com" },
    { id: "cedus", label: "Cedus \n (Current)" },
    { id: "typescriptDev", label: "TypeScript engineer" },
    { id: "fullStackEngineer", label: "Fullstack engineer" },
    { id: 'frontEndWeb', label: "Front end\nweb application development"},
    { id: 'backEndWeb', label: "Back end\nweb application development"},
    { id: 'node', label: "NodeJS"},
    { id: 'python', label: "Python"},
    { id: 'classification', label: "Text Classification"},
    { id: 'featureEngineering', label: "Domain-specific feature engineering"},
    { id: 'topicModelling', label: "Topic Modelling"},
    { id: 'typescript', label: "TypeScript / JavaScript"},
    {
      id: "depOfMentalHealth",
      label:
        "Department\n of Mental Health,\n Thailand",
    },
    { id: "publicHealthOfficer", label: "Public Health Officer" },
    { id: 'naturalLang', label: "Natural Language Processing" },
  ],
  edges: [
    { id: "about-skills", source: "about", target: "skills", label: "Has" },
    { id: "about-contact", source: "about", target: "contact" },
    { id: "contact-email", source: "contact", target: "email", label: "Email" },
    {
      id: "skills-beSciDataSci",
      source: "skills",
      target: "beSciDataSci",
    },
    {id: 'softwareEngineering-frontEndWeb', source: "softwareEngineering", target: "frontEndWeb", label: 'Specialised in'},
    {id: 'softwareEngineering-backEndWeb', source: "softwareEngineering", target: "backEndWeb", label: 'Specialised in'},
    {id: 'frontEndWeb-typescript', source:'frontEndWeb', target: "typescript", label: 'Using'},
    {id: 'backEndWeb-node', source:'backEndWeb', target: "node", label: 'Using'},
    {id: 'node-typescript', source:'node', target: "typescript", label: 'Using'},
    { id: 'naturalLang-classification', source:'naturalLang', target: "classification", label: 'Specifically'},
    { id: 'naturalLang-topicModelling', source:'naturalLang', target: "topicModelling", label: 'Specifically'},
    { id: 'classification-python', source:'classification', target: "python", label: 'Using'},
    { id: 'topicModelling-python', source:'topicModelling', target: "python", label: 'Using'},
    { id: 'naturalLang-featureEngineering', source:'naturalLang', target: "featureEngineering", label: 'Using'},


    {
      id: "skills-softwareEngineering",
      source: "skills",
      target: "softwareEngineering",
    },
    {id: 'beSciDataSci-naturalLang', source: "beSciDataSci", target: "naturalLang", label: 'Specialised in'},
    { id: "about-edu", source: "about", target: "edu" },
    { id: "edu-undergrad", source: "edu", target: "undergrad", label: "Level" },
    { id: "edu-postgrad", source: "edu", target: "postgrad", label: "Level" },
    { id: "undergrad-rochester", source: "undergrad", target: "rochester", label: "At" },
    { id: "postgrad-warwick", source: "postgrad", target: "warwick",  label: "At" },
    {
      id: "warwick-beSciAndDataSci",
      source: "warwick",
      target: "beSciAndDataSci",
      label: "Degree"
    },
    { id: "rochester-psych", source: "rochester", target: "psych", label: "Major" },
    { id: "rochester-film", source: "rochester", target: "film", label: "Major" },
    { id: "about-careers", source: "about", target: "careers" },
    {
      id: "careers-cedus",
      source: "careers",
      target: "cedus",
      label: "At",
    },
    {
      id: "cedus-softwareEngineering",
      label: "Using skill",
      source: "cedus",
      target: "softwareEngineering",
    },
    {
      id: "cedus-typescriptDev",
      source: "cedus",
      target: "typescriptDev",
      label: "Role",
    },
    {
      id: "cedus-fullStackEngineer",
      source: "cedus",
      target: "fullStackEngineer",
      label: "Role",
    },
    {
      id: "careers-depOfMentalHealth",
      source: "careers",
      target: "depOfMentalHealth",
      label: "At",
    },
    {
      id: "depOfMentalHealth-publicHealthOfficer",
      source: "depOfMentalHealth",
      target: "publicHealthOfficer",
      label: "Role",
    },
  ],
};

export default function About({}: Props): ReactElement {
  const { query } = useRouter();
  const [data, setData] = useState<GraphData>({});

  useEffect(() => {
    console.log(query);
    if (query.mode) {
      const visibleNodeIds = GraphCollapseHelper.getRemainingNodeIds(
        initialData as any,
        query.mode as string,
        GraphCollapseTypeEnum.getAllDescendants
      );
      const nodes = initialData.nodes?.filter((node) => {
        return visibleNodeIds.includes(node.id);
      });

      const edges = initialData.edges?.filter((edge) => {
        return (
          visibleNodeIds.includes(edge.source) &&
          visibleNodeIds.includes(edge.target)
        );
      });
      data.nodes = nodes;
      data.edges = edges;
      console.log({ data, nodes, visibleNodeIds });
      setData({ ...data });
    } else {
      setData({ ...initialData });
    }
    // Don't listen for data changes as we mutate it inside this useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div style={{ height: "100%" }}>
      <GraphComponent data={data ?? {}} />
    </div>
  );
}
