import G6, { Graph, GraphData, IGroup, INode } from "@antv/g6";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

interface Props {
  data: GraphData;
}

export default function GraphComponent({ data }: Props): ReactElement {
  const [graph, setGraph] = useState<Graph | null>();
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      !graph &&
      data &&
      data.nodes &&
      data.edges &&
      container &&
      container.current
    ) {
      setGraph(
        createGraph(data, container.current, () => {
          console.log("Graph layout has just been calculatee!");
        })
      );
    } else if (data && data.nodes && data.edges && graph && !graph.destroyed) {
      graph.changeData(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    return () => {
      graph?.destroy();
      console.log("Detached");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createGraph = (
    data: GraphData,
    container: HTMLDivElement,
    afterLayoutCallback: () => void
  ) => {
    const graphInstance = new G6.Graph({
      container: container,
      animate: false,
      plugins: [],
      modes: {
        default: ["drag-canvas", "zoom-canvas"],
      },
      layout: {
        type: "dagre",
        controlPoints: true,
        ranksep: 70,
        nodesep: 10,
        rankdir: "LR",
      },
      fitView: true,
      fitViewPadding: [50, 50, 50, 50],
      edgeStateStyles: {
        selected: {
          stroke: "rgb(135, 255, 79, 0.3)",
          shadowColor: "transparent",
        },
      },
      nodeStateStyles: {
        hover: {
          fill: "#121212",
          stroke: "rgb(135, 255, 79)",
        },
        selected: {
          fill: "black",
          shadowColor: "transparent",
          stroke: "rgb(135, 255, 79)",
        },
      },
      defaultNode: {
        type: "rect",
        size: [280, 60],
        style: {
          radius: 20,
          stroke: "transparent",
          fill: "#121212",
          cursor: "pointer",
        },
        labelCfg: {
          style: {
            fill: "white",
            fontSize: 16,
          },
        },
      },
      defaultEdge: {
        type: "cubic-horizontal",
        style: {
          radius: 20,
          offset: 45,
          endArrow: true,
          lineWidth: 2,
          stroke: "#c2c8d56a",
        },
        labelCfg: {
          style: {
            fill: "white",
          },
        },
      },
    });
    graphInstance.on("afterlayout", () => {
      if (graphInstance && !graphInstance.destroyed) {
        graphInstance.fitView([50, 50, 50, 50]);
      }
      afterLayoutCallback();
    });
    graphInstance.on("node:mouseenter", (evt) => {
      const { item } = evt;
      if (!item) {
        return;
      }
      graphInstance.setItemState(item, "hover", true);
    });
    graphInstance.on("node:mouseleave", (evt) => {
      const { item } = evt;
      if (!item) {
        return;
      }
      graphInstance.setItemState(item, "hover", false);
    });
    graphInstance.on("node:click", (evt) => {
      const { item } = evt;
      if (!item) {
        return;
      }
      const selectedNodes = graphInstance.findAllByState("node", "selected");
      selectedNodes.forEach((node) => {
        graphInstance.clearItemStates(node, "selected");
      });
      const selectedEdges = graphInstance.findAllByState("edge", "selected");
      selectedEdges.forEach((edge) => {
        graphInstance.clearItemStates(edge, "selected");
      });
      graphInstance.setItemState(item, "selected", true);
      (item as INode).getEdges().forEach((edge) => {
        graphInstance.setItemState(edge, "selected", true);
      });
      if (graphInstance.getZoom() < 1.2) {
        const zoom = (factor: number) => {
          graphInstance.zoomTo(factor, {
            x: item.getBBox().x,
            y: item.getBBox().y,
          });
          if (factor < 1.2) {
            requestAnimationFrame(() => {
              zoom(factor + 0.07);
            });
          }
        };
        requestAnimationFrame(() => {
          zoom(graphInstance.getZoom() + 0.07);
        });
        setTimeout(() => {
          graphInstance.focusItem(item, true, {
            duration: 300,
            easing: "easeCubic",
          });
        }, 300);
      }

      if (item.getModel().isCopyEnabled && item.getModel().label) {
        navigator.clipboard
          .writeText(item.getModel().label as string)
          .then(() => {
            toast.success(item.getModel().label + " copied to clipboard");
          })
          .catch((err) => console.error(err));
      }
    });
    graphInstance.read(data);
    return graphInstance;
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "#272727",
      }}
    >
      <div style={{ width: "100%", height: "100%" }} ref={container}></div>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          color: "white",
          padding: "1rem",
        }}
      >
        <button className="button" onClick={() => graph?.fitView()}>
          Reset View
        </button>
      </div>
    </div>
  );
}
