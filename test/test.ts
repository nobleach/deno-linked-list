import {
  assertEquals,
} from "./deps.ts";
import {
  LinkedList,
} from '../src/LinkedList.ts';

Deno.test({
  name: "Instantiates an empty list",
  fn(): void {
    const list = new LinkedList();
    assertEquals(list.getSize(), 0);
  }
});

Deno.test({
  name: "Adds an element to a list",
  fn(): void {
    const list = new LinkedList();
    list.add(3);
    assertEquals(list.getSize(), 1);
    assertEquals(list.printList(), '{ 3 }');
  }
});

Deno.test({
  name: "Inserts an element into a list",
  fn(): void {
    const list = new LinkedList();
    list.add(3);
    list.add(5);
    list.add(9);
    assertEquals(list.printList(), '{ 3 5 9 }');
    list.insertAt(7, 2);
    assertEquals(list.printList(), '{ 3 5 7 9 }');
  }
});

Deno.test({
  name: "Removes an element at an index",
  fn(): void {
    const list = new LinkedList();
    list.add(3);
    list.add(5);
    list.add(9);
    assertEquals(list.printList(), '{ 3 5 9 }');
    list.removeFrom(1);
    assertEquals(list.printList(), '{ 3 9 }');
  }
});

await Deno.runTests;
