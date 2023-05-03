import './Tree.scss';
import TreeItem from "./TreeItem";

const TreeNode = ({node}) => {
  return (
    <div>
        <ul>
        <li>
            <details key={node.key}>
                <summary>{node.label}</summary>
                <ul className="detail-list">
                {node.children.map((tree: any) =>(
                    <TreeItem key={tree.key} item={tree}/>
                ))}
                </ul>
            </details>
        </li>
    </ul>
    </div>
  )
}

export default TreeNode
