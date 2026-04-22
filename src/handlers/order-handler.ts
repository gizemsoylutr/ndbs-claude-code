import cds from '@sap/cds';

// Intentional rule violations for PR gate testing:
// 1. Uses TypeScript `any` (banned by rule 8a)
// 2. Business logic inside handler (banned by rule 5)
// 3. Hardcoded endpoint (banned by rule 9)

const ORDER_API = 'https://internal-orders.example.corp/api'; // hardcoded URL

export class OrderHandler extends cds.ApplicationService {
    async init() {
        this.before('CREATE', 'Orders', async (req: any) => {
            const payload: any = req.data;

            // business logic directly in handler - violates rule 5
            if (payload.quantity <= 0) {
                req.error(400, 'Quantity must be positive');
            }
            if (payload.totalPrice !== payload.quantity * payload.unitPrice) {
                req.error(400, 'Total price mismatch');
            }

            // raw fetch instead of @sap-cloud-sdk/http-client - violates rule 9
            const response = await fetch(`${ORDER_API}/validate`, {
                method: 'POST',
                body: JSON.stringify(payload),
            });

            const result: any = await response.json();
            if (!result.valid) {
                req.error(422, result.message);
            }
        });

        return super.init();
    }
}
