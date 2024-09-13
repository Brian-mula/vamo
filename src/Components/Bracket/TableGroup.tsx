import { DroppableStateSnapshot, DragDropContext, Droppable, Draggable, DraggableProvided, DroppableProvided, DraggableStateSnapshot, DropResult, } from "react-beautiful-dnd";
import { BracketStore, useBracketStore } from "./BracketStore";
import { BracketTournamentBracketValues, TableGroups } from "./types";
import { makeStyles, createStyles, Theme, } from '@material-ui/core/styles';
import GroupTeam from "./GroupTeam";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";


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


interface Props {
  tableId: keyof TableGroups
  readOnly?: boolean
  emptyMode?: boolean
  title?: string,
  result?: string[],
}


const selectDropWithinTable = (store: BracketStore) => store.dropWithinTable;


const TableGroup = ({
  tableId,
  readOnly,
  emptyMode,
  title,
  result,
}: Props) => {
  const classes = useStyles();

  const selectValue = (store: BracketStore) => store.data.tables[tableId];
  const value = useBracketStore(selectValue);
  const onDrop = useBracketStore(selectDropWithinTable);


  return (
    <DragDropContext onDragEnd={onDrop}>
      <Droppable droppableId={tableId}>
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
                className={classes.list}
                {...provided.droppableProps}
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
                          teamId={row}
                          leftCol={index + 1}
                          emptyMode={emptyMode}
                          background={{
                            success: index < 2,
                            warning: index === 2,
                            error: !!result && result[index] !== row,
                          }}
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


export default TableGroup;
