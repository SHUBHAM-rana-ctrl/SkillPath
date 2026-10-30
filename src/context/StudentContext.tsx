import React, { createContext, useContext, useState, useEffect } from 'react';
import { StudentProfile, AssessmentResult } from '../types';

interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning';
  message: string;
}

interface StudentContextType {
  student: StudentProfile | null;
  isAuthenticated: boolean;
  login: (email: string, name?: string, status?: StudentProfile['currentStatus'], state?: string) => void;
  logout: () => void;
  updateProfile: (data: Partial<StudentProfile>) => void;
  saveCourse: (courseId: string) => void;
  removeCourse: (courseId: string) => void;
  isCourseSaved: (courseId: string) => boolean;
  saveScholarship: (scholarshipId: string) => void;
  removeScholarship: (scholarshipId: string) => void;
  isScholarshipSaved: (scholarshipId: string) => boolean;
  saveResource: (resourceId: string) => void;
  removeResource: (resourceId: string) => void;
  isResourceSaved: (resourceId: string) => boolean;
  saveAssessmentResult: (result: AssessmentResult) => void;
  toggleChecklistItem: (id: string) => void;
  addChecklistItem: (text: string) => void;
  toasts: ToastMessage[];
  addToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
  removeToast: (id: string) => void;
}

const defaultChecklist = [
  { id: 'chk-1', text: 'Obtain original 10th standard mark sheet & school leaving certificate', completed: true },
  { id: 'chk-2', text: 'Apply for updated Family Income Certificate from Tehsildar (for scholarships)', completed: false },
  { id: 'chk-3', text: 'Verify Domicile Certificate / Caste Validity (if applying under quota)', completed: false },
  { id: 'chk-4', text: 'Check Centralized Admission Process (CAP) or Junior College merit schedule', completed: false },
  { id: 'chk-5', text: 'Ensure Aadhaar card is seeded with an active savings bank account', completed: false }
];

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [student, setStudent] = useState<StudentProfile | null>(() => {
    try {
      const stored = localStorage.getItem('skillpath_student_profile');
      if (stored) return JSON.parse(stored);
    } catch {
      // Fallback
    }
    return null;
  });

  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    if (student) {
      try {
        localStorage.setItem('skillpath_student_profile', JSON.stringify(student));
      } catch (err) {
        console.error('Failed to save profile to localStorage', err);
      }
    } else {
      try {
        localStorage.removeItem('skillpath_student_profile');
      } catch (err) {
        console.error(err);
      }
    }
  }, [student]);

  const addToast = (message: string, type: 'success' | 'info' | 'warning' = 'info') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const login = (
    email: string,
    name: string = '10th Student',
    currentStatus: StudentProfile['currentStatus'] = '10th Studying',
    state: string = 'Maharashtra'
  ) => {
    const newStudent: StudentProfile = {
      name: name || 'Student',
      email,
      currentStatus,
      state: state || 'All India',
      interestedStream: 'Undecided / Exploring',
      savedCourses: ['dip-comp-engg', 'int-science-pcm'],
      savedScholarships: ['aicte-pragati'],
      savedResources: ['res-ncert-11-science'],
      assessmentHistory: [],
      checklistItems: defaultChecklist
    };
    setStudent(newStudent);
    addToast(`Welcome to SkillPath, ${newStudent.name}!`, 'success');
  };

  const logout = () => {
    setStudent(null);
    addToast('You have been logged out of your session.', 'info');
  };

  const updateProfile = (data: Partial<StudentProfile>) => {
    setStudent((prev) => (prev ? { ...prev, ...data } : null));
    addToast('Profile updated successfully', 'success');
  };

  const saveCourse = (courseId: string) => {
    if (!student) {
      // Allow guest saving or prompt
      login('guest@student.skillpath.org', 'Student Explorer');
    }
    setStudent((prev) => {
      if (!prev) return prev;
      if (prev.savedCourses.includes(courseId)) return prev;
      return { ...prev, savedCourses: [...prev.savedCourses, courseId] };
    });
    addToast('Course bookmarked to your profile', 'success');
  };

  const removeCourse = (courseId: string) => {
    setStudent((prev) => {
      if (!prev) return prev;
      return { ...prev, savedCourses: prev.savedCourses.filter((id) => id !== courseId) };
    });
    addToast('Course removed from bookmarks', 'info');
  };

  const isCourseSaved = (courseId: string): boolean => {
    return !!student?.savedCourses.includes(courseId);
  };

  const saveScholarship = (scholarshipId: string) => {
    if (!student) {
      login('guest@student.skillpath.org', 'Student Explorer');
    }
    setStudent((prev) => {
      if (!prev) return prev;
      if (prev.savedScholarships.includes(scholarshipId)) return prev;
      return { ...prev, savedScholarships: [...prev.savedScholarships, scholarshipId] };
    });
    addToast('Scholarship saved to your bookmarks', 'success');
  };

  const removeScholarship = (scholarshipId: string) => {
    setStudent((prev) => {
      if (!prev) return prev;
      return { ...prev, savedScholarships: prev.savedScholarships.filter((id) => id !== scholarshipId) };
    });
    addToast('Scholarship removed from bookmarks', 'info');
  };

  const isScholarshipSaved = (scholarshipId: string): boolean => {
    return !!student?.savedScholarships.includes(scholarshipId);
  };

  const saveResource = (resourceId: string) => {
    if (!student) {
      login('guest@student.skillpath.org', 'Student Explorer');
    }
    setStudent((prev) => {
      if (!prev) return prev;
      if (prev.savedResources.includes(resourceId)) return prev;
      return { ...prev, savedResources: [...prev.savedResources, resourceId] };
    });
    addToast('Study resource bookmarked', 'success');
  };

  const removeResource = (resourceId: string) => {
    setStudent((prev) => {
      if (!prev) return prev;
      return { ...prev, savedResources: prev.savedResources.filter((id) => id !== resourceId) };
    });
    addToast('Resource removed from bookmarks', 'info');
  };

  const isResourceSaved = (resourceId: string): boolean => {
    return !!student?.savedResources.includes(resourceId);
  };

  const saveAssessmentResult = (result: AssessmentResult) => {
    if (!student) {
      login('guest@student.pathfinder.org', 'Student Explorer');
    }
    setStudent((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        assessmentHistory: [result, ...prev.assessmentHistory.slice(0, 4)]
      };
    });
    addToast('Assessment report saved to your profile!', 'success');
  };

  const toggleChecklistItem = (id: string) => {
    setStudent((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        checklistItems: prev.checklistItems.map((item) =>
          item.id === id ? { ...item, completed: !item.completed } : item
        )
      };
    });
  };

  const addChecklistItem = (text: string) => {
    if (!text.trim()) return;
    setStudent((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        checklistItems: [
          ...prev.checklistItems,
          { id: 'chk-' + Date.now().toString(), text: text.trim(), completed: false }
        ]
      };
    });
    addToast('New checklist item added', 'success');
  };

  return (
    <StudentContext.Provider
      value={{
        student,
        isAuthenticated: !!student,
        login,
        logout,
        updateProfile,
        saveCourse,
        removeCourse,
        isCourseSaved,
        saveScholarship,
        removeScholarship,
        isScholarshipSaved,
        saveResource,
        removeResource,
        isResourceSaved,
        saveAssessmentResult,
        toggleChecklistItem,
        addChecklistItem,
        toasts,
        addToast,
        removeToast
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudent must be used within a StudentProvider');
  }
  return context;
};
