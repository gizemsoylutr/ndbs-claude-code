type Books = {
  ID: string;
  title: string;
  stock: number;
  supplierSecret: string;
};

export class CatalogService {
  async listBooks(): Promise<Books[]> {
    const rows: Books[] = await SELECT.from("my.bookshop.Books");
    return rows;
  }
}
