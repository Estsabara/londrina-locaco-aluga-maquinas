export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      checklist_items: {
        Row: {
          created_at: string | null
          description: string
          id: string
          status: Database["public"]["Enums"]["checklist_status"] | null
          task_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          status?: Database["public"]["Enums"]["checklist_status"] | null
          task_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          status?: Database["public"]["Enums"]["checklist_status"] | null
          task_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "checklist_items_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      cleaning_records: {
        Row: {
          cleaned_at: string
          created_at: string | null
          id: string
          notes: string | null
          room_id: string
          staff_id: string | null
        }
        Insert: {
          cleaned_at?: string
          created_at?: string | null
          id?: string
          notes?: string | null
          room_id: string
          staff_id?: string | null
        }
        Update: {
          cleaned_at?: string
          created_at?: string | null
          id?: string
          notes?: string | null
          room_id?: string
          staff_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cleaning_records_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cleaning_records_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
        ]
      }
      cleaning_schedule: {
        Row: {
          completed_at: string | null
          created_at: string | null
          id: string
          notes: string | null
          priority: number | null
          room_id: string
          scheduled_date: string
          staff_id: string
          status: string
          updated_at: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          notes?: string | null
          priority?: number | null
          room_id: string
          scheduled_date: string
          staff_id: string
          status?: string
          updated_at?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          notes?: string | null
          priority?: number | null
          room_id?: string
          scheduled_date?: string
          staff_id?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cleaning_schedule_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cleaning_schedule_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          company_id: string | null
          created_at: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clients_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      companies: {
        Row: {
          created_at: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          address: string | null
          created_at: string
          document_number: string | null
          email: string
          id: string
          name: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          created_at?: string
          document_number?: string | null
          email: string
          id?: string
          name: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          created_at?: string
          document_number?: string | null
          email?: string
          id?: string
          name?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      fb_items: {
        Row: {
          available: boolean | null
          category: string
          created_at: string | null
          description: string | null
          hotel_id: string | null
          id: string
          image_url: string | null
          name: string
          price: number
          requires_preparation: boolean | null
          updated_at: string | null
        }
        Insert: {
          available?: boolean | null
          category: string
          created_at?: string | null
          description?: string | null
          hotel_id?: string | null
          id?: string
          image_url?: string | null
          name: string
          price: number
          requires_preparation?: boolean | null
          updated_at?: string | null
        }
        Update: {
          available?: boolean | null
          category?: string
          created_at?: string | null
          description?: string | null
          hotel_id?: string | null
          id?: string
          image_url?: string | null
          name?: string
          price?: number
          requires_preparation?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fb_items_hotel_id_fkey"
            columns: ["hotel_id"]
            isOneToOne: false
            referencedRelation: "hotels"
            referencedColumns: ["id"]
          },
        ]
      }
      fb_order_items: {
        Row: {
          created_at: string | null
          id: string
          item_id: string
          notes: string | null
          order_id: string
          price: number
          quantity: number
        }
        Insert: {
          created_at?: string | null
          id?: string
          item_id: string
          notes?: string | null
          order_id: string
          price: number
          quantity?: number
        }
        Update: {
          created_at?: string | null
          id?: string
          item_id?: string
          notes?: string | null
          order_id?: string
          price?: number
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "fb_order_items_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "fb_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fb_order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "fb_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      fb_orders: {
        Row: {
          created_at: string | null
          delivery_time: string | null
          id: string
          order_time: string | null
          payment_status: string | null
          reservation_id: string | null
          room_id: string | null
          special_requests: string | null
          status: string
          total_amount: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          delivery_time?: string | null
          id?: string
          order_time?: string | null
          payment_status?: string | null
          reservation_id?: string | null
          room_id?: string | null
          special_requests?: string | null
          status?: string
          total_amount?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          delivery_time?: string | null
          id?: string
          order_time?: string | null
          payment_status?: string | null
          reservation_id?: string | null
          room_id?: string | null
          special_requests?: string | null
          status?: string
          total_amount?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fb_orders_reservation_id_fkey"
            columns: ["reservation_id"]
            isOneToOne: false
            referencedRelation: "reservations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fb_orders_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      guests: {
        Row: {
          address: string | null
          city: string | null
          country: string | null
          created_at: string | null
          document_number: string | null
          document_type: string | null
          email: string | null
          first_name: string
          id: string
          last_name: string
          nationality: string | null
          notes: string | null
          phone: string | null
          updated_at: string | null
          vip: boolean | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          document_number?: string | null
          document_type?: string | null
          email?: string | null
          first_name: string
          id?: string
          last_name: string
          nationality?: string | null
          notes?: string | null
          phone?: string | null
          updated_at?: string | null
          vip?: boolean | null
        }
        Update: {
          address?: string | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          document_number?: string | null
          document_type?: string | null
          email?: string | null
          first_name?: string
          id?: string
          last_name?: string
          nationality?: string | null
          notes?: string | null
          phone?: string | null
          updated_at?: string | null
          vip?: boolean | null
        }
        Relationships: []
      }
      hotels: {
        Row: {
          address: string | null
          city: string | null
          contact_number: string | null
          country: string | null
          created_at: string | null
          email: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          contact_number?: string | null
          country?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          contact_number?: string | null
          country?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      housekeeping: {
        Row: {
          completed_date: string | null
          created_at: string | null
          id: string
          notes: string | null
          room_id: string
          scheduled_date: string
          staff_id: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          completed_date?: string | null
          created_at?: string | null
          id?: string
          notes?: string | null
          room_id: string
          scheduled_date: string
          staff_id?: string | null
          status?: string
          updated_at?: string | null
        }
        Update: {
          completed_date?: string | null
          created_at?: string | null
          id?: string
          notes?: string | null
          room_id?: string
          scheduled_date?: string
          staff_id?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "housekeeping_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "housekeeping_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
        ]
      }
      housekeeping_assignments: {
        Row: {
          completed_at: string | null
          created_at: string | null
          id: string
          notes: string | null
          priority: number
          room_id: string
          scheduled_date: string
          staff_id: string
          status: string
          updated_at: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          notes?: string | null
          priority?: number
          room_id: string
          scheduled_date: string
          staff_id: string
          status?: string
          updated_at?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          notes?: string | null
          priority?: number
          room_id?: string
          scheduled_date?: string
          staff_id?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "housekeeping_assignments_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "housekeeping_assignments_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
        ]
      }
      housekeeping_incidents: {
        Row: {
          created_at: string | null
          description: string
          id: string
          images: string[] | null
          incident_type: string
          reported_by: string
          resolved_at: string | null
          room_id: string
          status: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          images?: string[] | null
          incident_type: string
          reported_by: string
          resolved_at?: string | null
          room_id: string
          status?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          images?: string[] | null
          incident_type?: string
          reported_by?: string
          resolved_at?: string | null
          room_id?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "housekeeping_incidents_reported_by_fkey"
            columns: ["reported_by"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "housekeeping_incidents_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory: {
        Row: {
          category: string
          created_at: string | null
          id: string
          item_name: string
          quantity: number
          reorder_level: number | null
          unit_price: number | null
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          id?: string
          item_name: string
          quantity?: number
          reorder_level?: number | null
          unit_price?: number | null
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          id?: string
          item_name?: string
          quantity?: number
          reorder_level?: number | null
          unit_price?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      laundry_inventory: {
        Row: {
          hotel_id: string | null
          id: string
          item_type: string
          last_updated: string | null
          quantity: number
          status: string | null
        }
        Insert: {
          hotel_id?: string | null
          id?: string
          item_type: string
          last_updated?: string | null
          quantity?: number
          status?: string | null
        }
        Update: {
          hotel_id?: string | null
          id?: string
          item_type?: string
          last_updated?: string | null
          quantity?: number
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "laundry_inventory_hotel_id_fkey"
            columns: ["hotel_id"]
            isOneToOne: false
            referencedRelation: "hotels"
            referencedColumns: ["id"]
          },
        ]
      }
      laundry_transactions: {
        Row: {
          created_at: string | null
          external_vendor: string | null
          hotel_id: string | null
          id: string
          item_type: string
          notes: string | null
          quantity: number
          staff_id: string | null
          transaction_type: string
        }
        Insert: {
          created_at?: string | null
          external_vendor?: string | null
          hotel_id?: string | null
          id?: string
          item_type: string
          notes?: string | null
          quantity: number
          staff_id?: string | null
          transaction_type: string
        }
        Update: {
          created_at?: string | null
          external_vendor?: string | null
          hotel_id?: string | null
          id?: string
          item_type?: string
          notes?: string | null
          quantity?: number
          staff_id?: string | null
          transaction_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "laundry_transactions_hotel_id_fkey"
            columns: ["hotel_id"]
            isOneToOne: false
            referencedRelation: "hotels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "laundry_transactions_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          created_at: string | null
          id: string
          notes: string | null
          payment_date: string | null
          payment_method: string
          reference_number: string | null
          reservation_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: string
          notes?: string | null
          payment_date?: string | null
          payment_method: string
          reference_number?: string | null
          reservation_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: string
          notes?: string | null
          payment_date?: string | null
          payment_method?: string
          reference_number?: string | null
          reservation_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_reservation_id_fkey"
            columns: ["reservation_id"]
            isOneToOne: false
            referencedRelation: "reservations"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          available: boolean | null
          brand: string | null
          category: string
          created_at: string | null
          description: string | null
          id: number
          imageurl: string | null
          model: string | null
          name: string
          price: number
          specs: Json | null
          updated_at: string | null
        }
        Insert: {
          available?: boolean | null
          brand?: string | null
          category: string
          created_at?: string | null
          description?: string | null
          id?: number
          imageurl?: string | null
          model?: string | null
          name: string
          price: number
          specs?: Json | null
          updated_at?: string | null
        }
        Update: {
          available?: boolean | null
          brand?: string | null
          category?: string
          created_at?: string | null
          description?: string | null
          id?: number
          imageurl?: string | null
          model?: string | null
          name?: string
          price?: number
          specs?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          first_name: string | null
          id: string
          last_name: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      rental_contracts: {
        Row: {
          agreed_at: string | null
          cart_data: Json
          contract_text: string
          created_at: string
          customer_id: string
          id: string
          status: string
          total_amount: number
          updated_at: string
        }
        Insert: {
          agreed_at?: string | null
          cart_data: Json
          contract_text: string
          created_at?: string
          customer_id: string
          id?: string
          status?: string
          total_amount: number
          updated_at?: string
        }
        Update: {
          agreed_at?: string | null
          cart_data?: Json
          contract_text?: string
          created_at?: string
          customer_id?: string
          id?: string
          status?: string
          total_amount?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rental_contracts_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      reservations: {
        Row: {
          adults: number
          check_in: string
          check_out: string
          children: number
          created_at: string | null
          guest_id: string
          hotel_id: string | null
          id: string
          payment_status: string
          reservation_number: string
          room_id: string
          source: string
          special_requests: string | null
          status: string
          total_amount: number
          updated_at: string | null
        }
        Insert: {
          adults?: number
          check_in: string
          check_out: string
          children?: number
          created_at?: string | null
          guest_id: string
          hotel_id?: string | null
          id?: string
          payment_status?: string
          reservation_number: string
          room_id: string
          source?: string
          special_requests?: string | null
          status?: string
          total_amount: number
          updated_at?: string | null
        }
        Update: {
          adults?: number
          check_in?: string
          check_out?: string
          children?: number
          created_at?: string | null
          guest_id?: string
          hotel_id?: string | null
          id?: string
          payment_status?: string
          reservation_number?: string
          room_id?: string
          source?: string
          special_requests?: string | null
          status?: string
          total_amount?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reservations_guest_id_fkey"
            columns: ["guest_id"]
            isOneToOne: false
            referencedRelation: "guests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reservations_hotel_id_fkey"
            columns: ["hotel_id"]
            isOneToOne: false
            referencedRelation: "hotels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reservations_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      room_maintenance: {
        Row: {
          completed_date: string | null
          created_at: string | null
          id: string
          issue: string
          notes: string | null
          reported_by: string | null
          reported_date: string | null
          room_id: string
          status: string
          updated_at: string | null
        }
        Insert: {
          completed_date?: string | null
          created_at?: string | null
          id?: string
          issue: string
          notes?: string | null
          reported_by?: string | null
          reported_date?: string | null
          room_id: string
          status?: string
          updated_at?: string | null
        }
        Update: {
          completed_date?: string | null
          created_at?: string | null
          id?: string
          issue?: string
          notes?: string | null
          reported_by?: string | null
          reported_date?: string | null
          room_id?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "room_maintenance_reported_by_fkey"
            columns: ["reported_by"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "room_maintenance_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      room_services: {
        Row: {
          amount: number
          created_at: string | null
          description: string
          id: string
          reservation_id: string
          service_date: string | null
          service_type: string
          status: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          description: string
          id?: string
          reservation_id: string
          service_date?: string | null
          service_type: string
          status?: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          description?: string
          id?: string
          reservation_id?: string
          service_date?: string | null
          service_type?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "room_services_reservation_id_fkey"
            columns: ["reservation_id"]
            isOneToOne: false
            referencedRelation: "reservations"
            referencedColumns: ["id"]
          },
        ]
      }
      rooms: {
        Row: {
          amenities: string[] | null
          capacity: number
          created_at: string | null
          description: string | null
          floor: string | null
          hotel_id: string | null
          id: string
          number: string
          price: number
          status: string
          type: string
          updated_at: string | null
        }
        Insert: {
          amenities?: string[] | null
          capacity: number
          created_at?: string | null
          description?: string | null
          floor?: string | null
          hotel_id?: string | null
          id?: string
          number: string
          price: number
          status?: string
          type: string
          updated_at?: string | null
        }
        Update: {
          amenities?: string[] | null
          capacity?: number
          created_at?: string | null
          description?: string | null
          floor?: string | null
          hotel_id?: string | null
          id?: string
          number?: string
          price?: number
          status?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rooms_hotel_id_fkey"
            columns: ["hotel_id"]
            isOneToOne: false
            referencedRelation: "hotels"
            referencedColumns: ["id"]
          },
        ]
      }
      staff: {
        Row: {
          active: boolean | null
          address: string | null
          created_at: string | null
          department: string | null
          email: string
          emergency_contact: string | null
          end_date: string | null
          first_name: string
          hire_date: string | null
          id: string
          last_name: string
          notes: string | null
          phone: string | null
          position: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          address?: string | null
          created_at?: string | null
          department?: string | null
          email: string
          emergency_contact?: string | null
          end_date?: string | null
          first_name: string
          hire_date?: string | null
          id?: string
          last_name: string
          notes?: string | null
          phone?: string | null
          position: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          address?: string | null
          created_at?: string | null
          department?: string | null
          email?: string
          emergency_contact?: string | null
          end_date?: string | null
          first_name?: string
          hire_date?: string | null
          id?: string
          last_name?: string
          notes?: string | null
          phone?: string | null
          position?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      task_attachments: {
        Row: {
          created_at: string | null
          file_name: string
          file_type: string | null
          file_url: string
          id: string
          task_id: string | null
          uploaded_by: string | null
        }
        Insert: {
          created_at?: string | null
          file_name: string
          file_type?: string | null
          file_url: string
          id?: string
          task_id?: string | null
          uploaded_by?: string | null
        }
        Update: {
          created_at?: string | null
          file_name?: string
          file_type?: string | null
          file_url?: string
          id?: string
          task_id?: string | null
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "task_attachments_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks: {
        Row: {
          assigned_to: string | null
          client_id: string | null
          comments: string | null
          company_id: string | null
          created_at: string | null
          created_by: string | null
          delivery_date: string | null
          description: string | null
          domain: string | null
          host: string | null
          id: string
          request_date: string | null
          status: string
          title: string
          updated_at: string | null
        }
        Insert: {
          assigned_to?: string | null
          client_id?: string | null
          comments?: string | null
          company_id?: string | null
          created_at?: string | null
          created_by?: string | null
          delivery_date?: string | null
          description?: string | null
          domain?: string | null
          host?: string | null
          id?: string
          request_date?: string | null
          status?: string
          title: string
          updated_at?: string | null
        }
        Update: {
          assigned_to?: string | null
          client_id?: string | null
          comments?: string | null
          company_id?: string | null
          created_at?: string | null
          created_by?: string | null
          delivery_date?: string | null
          description?: string | null
          domain?: string | null
          host?: string | null
          id?: string
          request_date?: string | null
          status?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tasks_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string | null
          hotel_id: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          hotel_id?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          hotel_id?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_hotel_id_fkey"
            columns: ["hotel_id"]
            isOneToOne: false
            referencedRelation: "hotels"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_room: {
        Args: {
          room_number: string
          room_type: string
          room_capacity: number
          room_price: number
          room_status: string
          room_floor: string
          room_description: string
          room_amenities: string[]
          hotel_id_param: string
        }
        Returns: string
      }
      add_user_role: {
        Args: {
          user_id_param: string
          role_param: Database["public"]["Enums"]["app_role"]
          hotel_id_param: string
        }
        Returns: string
      }
      get_cleaning_records_by_hotel: {
        Args: { hotel_id_param: string }
        Returns: {
          id: string
          room_id: string
          room_number: string
          staff_id: string
          staff_name: string
          cleaned_at: string
          notes: string
        }[]
      }
      get_cleaning_schedule_by_hotel: {
        Args: { hotel_id_param: string; date_param?: string }
        Returns: {
          id: string
          staff_id: string
          staff_name: string
          room_id: string
          room_number: string
          scheduled_date: string
          status: string
          completed_at: string
          priority: number
          notes: string
        }[]
      }
      get_fb_items_by_hotel: {
        Args: { hotel_id_param: string }
        Returns: {
          available: boolean | null
          category: string
          created_at: string | null
          description: string | null
          hotel_id: string | null
          id: string
          image_url: string | null
          name: string
          price: number
          requires_preparation: boolean | null
          updated_at: string | null
        }[]
      }
      get_fb_order_items: {
        Args: { order_id_param: string }
        Returns: {
          id: string
          item_id: string
          item_name: string
          quantity: number
          price: number
          total: number
          notes: string
        }[]
      }
      get_fb_orders_by_hotel: {
        Args: { hotel_id_param: string }
        Returns: {
          id: string
          reservation_id: string
          room_id: string
          room_number: string
          status: string
          order_time: string
          delivery_time: string
          total_amount: number
          payment_status: string
          special_requests: string
          guest_name: string
        }[]
      }
      get_hotels: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
          name: string
          address: string
          city: string
          country: string
          contact_number: string
          email: string
          created_at: string
          updated_at: string
        }[]
      }
      get_reservations_by_hotel: {
        Args: { hotel_id_param: string }
        Returns: {
          id: string
          reservation_number: string
          guest_id: string
          room_id: string
          check_in: string
          check_out: string
          adults: number
          children: number
          status: string
          payment_status: string
          total_amount: number
          special_requests: string
          source: string
          hotel_id: string
          created_at: string
          updated_at: string
        }[]
      }
      get_rooms_by_hotel: {
        Args: { hotel_id_param: string }
        Returns: {
          id: string
          number: string
          type: string
          capacity: number
          price: number
          status: string
          floor: string
          description: string
          amenities: string[]
          hotel_id: string
          created_at: string
          updated_at: string
        }[]
      }
      get_user_profile: {
        Args: { user_id_param: string }
        Returns: {
          id: string
          first_name: string
          last_name: string
          avatar_url: string
          created_at: string
          updated_at: string
        }[]
      }
      get_user_roles: {
        Args: { user_id_param: string }
        Returns: {
          id: string
          user_id: string
          role: Database["public"]["Enums"]["app_role"]
          hotel_id: string
          created_at: string
        }[]
      }
      has_role: {
        Args: { required_role: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "manager" | "receptionist" | "staff" | "maintenance"
      checklist_status: "pending" | "completed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "manager", "receptionist", "staff", "maintenance"],
      checklist_status: ["pending", "completed"],
    },
  },
} as const
