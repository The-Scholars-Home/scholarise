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
      AcademicRecord: {
        Row: {
          classId: string | null
          createdAt: string
          id: string
          sessionId: string
          status: string
          studentId: string
          updatedAt: string
        }
        Insert: {
          classId?: string | null
          createdAt?: string
          id: string
          sessionId: string
          status: string
          studentId: string
          updatedAt: string
        }
        Update: {
          classId?: string | null
          createdAt?: string
          id?: string
          sessionId?: string
          status?: string
          studentId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "AcademicRecord_sessionId_fkey"
            columns: ["sessionId"]
            isOneToOne: false
            referencedRelation: "AcademicSession"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "AcademicRecord_studentId_fkey"
            columns: ["studentId"]
            isOneToOne: false
            referencedRelation: "Student"
            referencedColumns: ["id"]
          },
        ]
      }
      AcademicSession: {
        Row: {
          createdAt: string
          endDate: string
          id: string
          isActive: boolean
          name: string
          startDate: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          endDate: string
          id: string
          isActive?: boolean
          name: string
          startDate: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          endDate?: string
          id?: string
          isActive?: boolean
          name?: string
          startDate?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Branch: {
        Row: {
          address: string | null
          city: string | null
          code: string
          country: string | null
          createdAt: string
          email: string | null
          id: string
          name: string
          order: number
          phone: string | null
          state: string | null
          updatedAt: string
        }
        Insert: {
          address?: string | null
          city?: string | null
          code: string
          country?: string | null
          createdAt?: string
          email?: string | null
          id: string
          name: string
          order?: number
          phone?: string | null
          state?: string | null
          updatedAt: string
        }
        Update: {
          address?: string | null
          city?: string | null
          code?: string
          country?: string | null
          createdAt?: string
          email?: string | null
          id?: string
          name?: string
          order?: number
          phone?: string | null
          state?: string | null
          updatedAt?: string
        }
        Relationships: []
      }
      Class: {
        Row: {
          branchId: string
          capacity: number
          createdAt: string
          id: string
          isActive: boolean
          name: string
          section: string
          sessionId: string
          teacherId: string | null
          updatedAt: string
        }
        Insert: {
          branchId: string
          capacity?: number
          createdAt?: string
          id: string
          isActive?: boolean
          name: string
          section: string
          sessionId: string
          teacherId?: string | null
          updatedAt: string
        }
        Update: {
          branchId?: string
          capacity?: number
          createdAt?: string
          id?: string
          isActive?: boolean
          name?: string
          section?: string
          sessionId?: string
          teacherId?: string | null
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Class_branchId_fkey"
            columns: ["branchId"]
            isOneToOne: false
            referencedRelation: "Branch"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Class_sessionId_fkey"
            columns: ["sessionId"]
            isOneToOne: false
            referencedRelation: "AcademicSession"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Class_teacherId_fkey"
            columns: ["teacherId"]
            isOneToOne: false
            referencedRelation: "Teacher"
            referencedColumns: ["id"]
          },
        ]
      }
      Employee: {
        Row: {
          branchId: string
          createdAt: string
          department: string | null
          designation: string
          firstName: string
          id: string
          isActive: boolean
          joinDate: string
          lastName: string
          updatedAt: string
          userId: string | null
        }
        Insert: {
          branchId: string
          createdAt?: string
          department?: string | null
          designation: string
          firstName: string
          id: string
          isActive?: boolean
          joinDate?: string
          lastName: string
          updatedAt: string
          userId?: string | null
        }
        Update: {
          branchId?: string
          createdAt?: string
          department?: string | null
          designation?: string
          firstName?: string
          id?: string
          isActive?: boolean
          joinDate?: string
          lastName?: string
          updatedAt?: string
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Employee_branchId_fkey"
            columns: ["branchId"]
            isOneToOne: false
            referencedRelation: "Branch"
            referencedColumns: ["id"]
          },
        ]
      }
      Parent: {
        Row: {
          clerkId: string | null
          createdAt: string
          fatherDob: string | null
          fatherEducation: string | null
          fatherEmail: string | null
          fatherMobile: string | null
          fatherName: string | null
          fatherOccupation: string | null
          guardianDob: string | null
          guardianEducation: string | null
          guardianEmail: string | null
          guardianMobile: string | null
          guardianName: string | null
          guardianOccupation: string | null
          id: string
          monthlyIncome: string | null
          motherDob: string | null
          motherEducation: string | null
          motherEmail: string | null
          motherMobile: string | null
          motherName: string | null
          motherOccupation: string | null
          parentAnniversary: string | null
          updatedAt: string
        }
        Insert: {
          clerkId?: string | null
          createdAt?: string
          fatherDob?: string | null
          fatherEducation?: string | null
          fatherEmail?: string | null
          fatherMobile?: string | null
          fatherName?: string | null
          fatherOccupation?: string | null
          guardianDob?: string | null
          guardianEducation?: string | null
          guardianEmail?: string | null
          guardianMobile?: string | null
          guardianName?: string | null
          guardianOccupation?: string | null
          id: string
          monthlyIncome?: string | null
          motherDob?: string | null
          motherEducation?: string | null
          motherEmail?: string | null
          motherMobile?: string | null
          motherName?: string | null
          motherOccupation?: string | null
          parentAnniversary?: string | null
          updatedAt: string
        }
        Update: {
          clerkId?: string | null
          createdAt?: string
          fatherDob?: string | null
          fatherEducation?: string | null
          fatherEmail?: string | null
          fatherMobile?: string | null
          fatherName?: string | null
          fatherOccupation?: string | null
          guardianDob?: string | null
          guardianEducation?: string | null
          guardianEmail?: string | null
          guardianMobile?: string | null
          guardianName?: string | null
          guardianOccupation?: string | null
          id?: string
          monthlyIncome?: string | null
          motherDob?: string | null
          motherEducation?: string | null
          motherEmail?: string | null
          motherMobile?: string | null
          motherName?: string | null
          motherOccupation?: string | null
          parentAnniversary?: string | null
          updatedAt?: string
        }
        Relationships: []
      }
      Student: {
        Row: {
          aadharNumber: string | null
          address: string | null
          admissionNumber: string
          bloodGroup: string | null
          branchId: string
          caste: string | null
          classId: string | null
          clerkId: string | null
          correspondenceAddress: string | null
          correspondenceCity: string | null
          correspondenceCountry: string | null
          correspondenceState: string | null
          correspondenceZipCode: string | null
          createdAt: string
          dateOfAdmission: string | null
          dateOfBirth: string
          email: string | null
          firstName: string
          gender: string
          id: string
          isActive: boolean
          joinDate: string
          lastClassAttended: string | null
          lastName: string
          mediumOfInstruction: string | null
          nationality: string | null
          parentId: string | null
          password: string | null
          permanentAddress: string | null
          permanentCity: string | null
          permanentCountry: string | null
          permanentState: string | null
          permanentZipCode: string | null
          personalEmail: string | null
          phone: string | null
          previousSchool: string | null
          reasonForLeaving: string | null
          recognisedByStateBoard: boolean | null
          religion: string | null
          rollNumber: string | null
          schoolCity: string | null
          schoolState: string | null
          udiseId: string | null
          updatedAt: string
          username: string | null
        }
        Insert: {
          aadharNumber?: string | null
          address?: string | null
          admissionNumber: string
          bloodGroup?: string | null
          branchId: string
          caste?: string | null
          classId?: string | null
          clerkId?: string | null
          correspondenceAddress?: string | null
          correspondenceCity?: string | null
          correspondenceCountry?: string | null
          correspondenceState?: string | null
          correspondenceZipCode?: string | null
          createdAt?: string
          dateOfAdmission?: string | null
          dateOfBirth: string
          email?: string | null
          firstName: string
          gender: string
          id: string
          isActive?: boolean
          joinDate?: string
          lastClassAttended?: string | null
          lastName: string
          mediumOfInstruction?: string | null
          nationality?: string | null
          parentId?: string | null
          password?: string | null
          permanentAddress?: string | null
          permanentCity?: string | null
          permanentCountry?: string | null
          permanentState?: string | null
          permanentZipCode?: string | null
          personalEmail?: string | null
          phone?: string | null
          previousSchool?: string | null
          reasonForLeaving?: string | null
          recognisedByStateBoard?: boolean | null
          religion?: string | null
          rollNumber?: string | null
          schoolCity?: string | null
          schoolState?: string | null
          udiseId?: string | null
          updatedAt: string
          username?: string | null
        }
        Update: {
          aadharNumber?: string | null
          address?: string | null
          admissionNumber?: string
          bloodGroup?: string | null
          branchId?: string
          caste?: string | null
          classId?: string | null
          clerkId?: string | null
          correspondenceAddress?: string | null
          correspondenceCity?: string | null
          correspondenceCountry?: string | null
          correspondenceState?: string | null
          correspondenceZipCode?: string | null
          createdAt?: string
          dateOfAdmission?: string | null
          dateOfBirth?: string
          email?: string | null
          firstName?: string
          gender?: string
          id?: string
          isActive?: boolean
          joinDate?: string
          lastClassAttended?: string | null
          lastName?: string
          mediumOfInstruction?: string | null
          nationality?: string | null
          parentId?: string | null
          password?: string | null
          permanentAddress?: string | null
          permanentCity?: string | null
          permanentCountry?: string | null
          permanentState?: string | null
          permanentZipCode?: string | null
          personalEmail?: string | null
          phone?: string | null
          previousSchool?: string | null
          reasonForLeaving?: string | null
          recognisedByStateBoard?: boolean | null
          religion?: string | null
          rollNumber?: string | null
          schoolCity?: string | null
          schoolState?: string | null
          udiseId?: string | null
          updatedAt?: string
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Student_branchId_fkey"
            columns: ["branchId"]
            isOneToOne: false
            referencedRelation: "Branch"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Student_classId_fkey"
            columns: ["classId"]
            isOneToOne: false
            referencedRelation: "Class"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Student_parentId_fkey"
            columns: ["parentId"]
            isOneToOne: false
            referencedRelation: "Parent"
            referencedColumns: ["id"]
          },
        ]
      }
      StudentSibling: {
        Row: {
          createdAt: string
          id: string
          relationshipType: string
          siblingId: string
          studentId: string
        }
        Insert: {
          createdAt?: string
          id: string
          relationshipType: string
          siblingId: string
          studentId: string
        }
        Update: {
          createdAt?: string
          id?: string
          relationshipType?: string
          siblingId?: string
          studentId?: string
        }
        Relationships: [
          {
            foreignKeyName: "StudentSibling_siblingId_fkey"
            columns: ["siblingId"]
            isOneToOne: false
            referencedRelation: "Student"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "StudentSibling_studentId_fkey"
            columns: ["studentId"]
            isOneToOne: false
            referencedRelation: "Student"
            referencedColumns: ["id"]
          },
        ]
      }
      Teacher: {
        Row: {
          branchId: string
          createdAt: string
          employeeCode: string | null
          firstName: string
          id: string
          isActive: boolean
          joinDate: string
          lastName: string
          qualification: string | null
          specialization: string | null
          updatedAt: string
          userId: string | null
        }
        Insert: {
          branchId: string
          createdAt?: string
          employeeCode?: string | null
          firstName: string
          id: string
          isActive?: boolean
          joinDate?: string
          lastName: string
          qualification?: string | null
          specialization?: string | null
          updatedAt: string
          userId?: string | null
        }
        Update: {
          branchId?: string
          createdAt?: string
          employeeCode?: string | null
          firstName?: string
          id?: string
          isActive?: boolean
          joinDate?: string
          lastName?: string
          qualification?: string | null
          specialization?: string | null
          updatedAt?: string
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Teacher_branchId_fkey"
            columns: ["branchId"]
            isOneToOne: false
            referencedRelation: "Branch"
            referencedColumns: ["id"]
          },
        ]
      }
      TransferCertificate: {
        Row: {
          createdAt: string
          id: string
          issueDate: string
          reason: string | null
          remarks: string | null
          studentId: string
          tcNumber: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id: string
          issueDate?: string
          reason?: string | null
          remarks?: string | null
          studentId: string
          tcNumber: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: string
          issueDate?: string
          reason?: string | null
          remarks?: string | null
          studentId?: string
          tcNumber?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "TransferCertificate_studentId_fkey"
            columns: ["studentId"]
            isOneToOne: false
            referencedRelation: "Student"
            referencedColumns: ["id"]
          },
        ]
      }
      TransportAssignment: {
        Row: {
          createdAt: string
          endDate: string | null
          id: string
          isActive: boolean
          startDate: string
          stopId: string
          studentId: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          endDate?: string | null
          id: string
          isActive?: boolean
          startDate?: string
          stopId: string
          studentId: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          endDate?: string | null
          id?: string
          isActive?: boolean
          startDate?: string
          stopId?: string
          studentId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "TransportAssignment_stopId_fkey"
            columns: ["stopId"]
            isOneToOne: false
            referencedRelation: "TransportStop"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "TransportAssignment_studentId_fkey"
            columns: ["studentId"]
            isOneToOne: false
            referencedRelation: "Student"
            referencedColumns: ["id"]
          },
        ]
      }
      TransportRoute: {
        Row: {
          branchId: string
          createdAt: string
          description: string | null
          id: string
          isActive: boolean
          name: string
          updatedAt: string
        }
        Insert: {
          branchId: string
          createdAt?: string
          description?: string | null
          id: string
          isActive?: boolean
          name: string
          updatedAt: string
        }
        Update: {
          branchId?: string
          createdAt?: string
          description?: string | null
          id?: string
          isActive?: boolean
          name?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "TransportRoute_branchId_fkey"
            columns: ["branchId"]
            isOneToOne: false
            referencedRelation: "Branch"
            referencedColumns: ["id"]
          },
        ]
      }
      TransportStop: {
        Row: {
          address: string | null
          createdAt: string
          distance: number | null
          fee: number
          id: string
          isActive: boolean
          name: string
          routeId: string
          sequence: number
          updatedAt: string
        }
        Insert: {
          address?: string | null
          createdAt?: string
          distance?: number | null
          fee: number
          id: string
          isActive?: boolean
          name: string
          routeId: string
          sequence: number
          updatedAt: string
        }
        Update: {
          address?: string | null
          createdAt?: string
          distance?: number | null
          fee?: number
          id?: string
          isActive?: boolean
          name?: string
          routeId?: string
          sequence?: number
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "TransportStop_routeId_fkey"
            columns: ["routeId"]
            isOneToOne: false
            referencedRelation: "TransportRoute"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
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
    Enums: {},
  },
} as const
