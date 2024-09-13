import { useMemo, } from 'react';
import { DroppableStateSnapshot, DragDropContext, Droppable, Draggable, DraggableProvided, DroppableProvided, DraggableStateSnapshot, DropResult, } from "react-beautiful-dnd";
import { BracketStore, useBracketStore } from "./BracketStore";
import clsx from "clsx";
import GroupTeam from "./GroupTeam";
import { makeStyles, createStyles, Theme, } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import { TableGroups } from './types';


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: 230,
    '& > .table-group--dragging': {
      borderColor: '#838383',
    },
  },
  listWrapper: {
    display: 'inline-block',
    padding: 4,
    border: '1px dashed transparent',
    width: '100%',
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    width: '100%',
  },
}));


const isError = (
  tables: TableGroups,
  tableId: keyof TableGroups,
  index: number,
  winnersObj: { [x: string]: boolean; } | null,
  losersObj: { [x: string]: boolean; } | null) => {
  if (!winnersObj || !losersObj) return false;
  const teamId = tables[tableId][2];

  if (index < 4) {
    if (!(winnersObj[teamId])) return true;
  } else {
    if (!(losersObj[teamId])) return true;
  }

  return false;
}


const selectorDeciderOrder = (store: BracketStore) => store.data.deciderOrder;
const selectorDropDecider = (store: BracketStore) => store.dropDecider;
const selectTables = (store: BracketStore) => store.data.tables;


interface Props {
  readOnly?: boolean
  emptyMode?: boolean
  title?: string,
  result?: any,
}


const TableDecider = ({
  readOnly,
  emptyMode,
  title,
  result,
}: Props) => {
  const classes = useStyles();

  const value = useBracketStore(selectorDeciderOrder);
  const onDrop = useBracketStore(selectorDropDecider);
  const tables = useBracketStore(selectTables);


  const winnersObj = useMemo(
    () => {
      try {
        return {
          [result.tables[result.deciderOrder[0]][2] as string]: true,
          [result.tables[result.deciderOrder[1]][2] as string]: true,
          [result.tables[result.deciderOrder[2]][2] as string]: true,
          [result.tables[result.deciderOrder[3]][2] as string]: true,
        };
      } catch {
        return null; 
      }
    },
    [ result, ],
  );
  const losersObj = useMemo(
    () => {
      try {
        return {
          [result.tables[result.deciderOrder[4]][2] as string]: true,
          [result.tables[result.deciderOrder[5]][2] as string]: true,
        };
      } catch {
        return null; 
      }
    },
    [ result, ],
  );


  return (
    <DragDropContext onDragEnd={onDrop}>
      <Droppable droppableId="decider">
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <div className={classes.root}>
            <Typography
              variant="subtitle1"
              align="center"
            >
              {title}
            </Typography>
            <div className={clsx(classes.listWrapper, snapshot.draggingFromThisWith && 'table-group--dragging')}>
              <ul
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={classes.list}
              >
                {value.map((row, index) => (
                  <Draggable key={row} draggableId={row} index={index} isDragDisabled={readOnly}>
                    {(providedDraggable:DraggableProvided, snapshotDraggable: DraggableStateSnapshot) => (
                      <li
                        ref={providedDraggable.innerRef}
                        {...providedDraggable.draggableProps}
                        {...providedDraggable.dragHandleProps}
                      >
                        <GroupTeam
                          teamId={tables[row][2]}
                          leftCol={index < 4 ? 'Q' : ''}
                          background={{
                            success: index < 4,
                            warning: false,
                            error: isError(tables, row, index, winnersObj, losersObj),
                          }}
                          emptyMode={emptyMode}
                        />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};


export default TableDecider;
