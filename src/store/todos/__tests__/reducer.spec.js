import { todosReducer } from "../reducer";

describe("todos reducer", () => {
  it("should handle initial state", () => {
    expect(todosReducer(undefined, {})).toEqual([]);
  });

  it("should handle ADD_TODO", () => {
    expect(
      todosReducer([], {
        type: "ADD_TODO",
        text: "Run the tests",
        id: 0
      })
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0
      }
    ]);

    expect(
      todosReducer(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 0
          }
        ],
        {
          type: "ADD_TODO",
          text: "Use Redux",
          id: 1
        }
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0
      },
      {
        text: "Use Redux",
        completed: false,
        id: 1
      }
    ]);

    expect(
      todosReducer(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 0
          },
          {
            text: "Use Redux",
            completed: false,
            id: 1
          }
        ],
        {
          type: "ADD_TODO",
          text: "Fix the tests",
          id: 2
        }
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0
      },
      {
        text: "Use Redux",
        completed: false,
        id: 1
      },
      {
        text: "Fix the tests",
        completed: false,
        id: 2
      }
    ]);
  });

  it("should handle TOGGLE_TODO", () => {
    expect(
      todosReducer(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 1
          },
          {
            text: "Use Redux",
            completed: false,
            id: 0
          }
        ],
        {
          type: "TOGGLE_TODO",
          id: 1
        }
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: true,
        id: 1
      },
      {
        text: "Use Redux",
        completed: false,
        id: 0
      }
    ]);
  });
});
